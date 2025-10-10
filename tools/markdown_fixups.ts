function process_options_md(content: string) {
    const known_flags: { [k: string]: string; } = {}

    function fix_cli_headers(_: string, ...args: string[]) {
        const h_tag = args[0];
        let flags_md = args[1];
        const details = args[2];

        // extract flags and use longest one as anchor id
        const flag_list = Array.from(flags_md.matchAll(/(-+[^=`]+)/g)).map(m => m[0]);
        const anchor = flag_list.reduce((a, b) => a.length > b.length ? a : b);
        for (const flag of flag_list)
            known_flags[flag] = anchor;

        // change `a=b` to `a`_`=b`_ to make the value hint italics so we can style it later
        flags_md = flags_md.replace(/=([^`]+)`/, '`_`=$1`_');

        // put the rest of the line (if any) as <small> so we can style it later
        const details_html = details ? ` <small>${details}</small>` : ""

        return `${h_tag} ${flags_md}${details_html} {#${anchor}}`;
    }

    function add_anchor_links_for_known_flags(substring: string, ...args: string[]) {
        const is_header = args[args.length - 1].startsWith('#')
        const is_known_flag = known_flags[args[0]] != undefined;
        return is_known_flag && !is_header ? `[\`${args[0]}${args[1] || ""}\`](#${known_flags[args[0]]})` : substring;
    }

    let lines = content.split(/\r?\n/g);
    lines = lines.map(l => l.replace(/(##+) *(`[^\(\)]+) *(\(.+\))?/, fix_cli_headers));
    lines = lines.map(l => l.replaceAll(/`(--?[^=`]+)(=[^`]*)?`/g, add_anchor_links_for_known_flags));
    return lines.join('\n');
}

module.exports = process_options_md;
