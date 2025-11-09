function processUserOptions(content: string): string {
    const known_flags: { [k: string]: string; } = {}

    function fixCliHeaders(_: string, ...args: string[]) {
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

    function addAnchorLinksForKnownFlags(substring: string, ...args: string[]) {
        function make_link(k: string, v: string) {
            return known_flags[k] ? `[\`${k}${v}\`](#${known_flags[k]})` : `\`${k}${v}\``;
        }
        const is_header = args[args.length - 1].startsWith('#');
        if (!is_header && args[0] != undefined) return make_link(args[1], args[2] || "");
        if (!is_header && args[3] != undefined) return make_link(args[4], args[5] || "");
        return substring;
    }

    let lines = content.split(/\r?\n/g);
    lines = lines.map(l => l.replace(/(##+) *(`[^\(\)]+) *(\(.+\))?/, fixCliHeaders));
    lines = lines.map(l => l.replaceAll(/(`(--[^=`]+)(=[^`]*)?`)|(`(-[^=`])([^`]*)?`)/g, addAnchorLinksForKnownFlags));
    return lines.join('\n');
}

function processLibOptions(content: string): string {
    function fixOptionsHeaders(_: string, ...args: string[]) {
        const h_tag = args[0];
        const option = args[1];
        const details = args[2];

        const anchor = option;
        const details_html = details ? ` <small>${details}</small>` : ""

        return `${h_tag} \`${option}\`${details_html} {#${anchor}}`;
    }

    function addCliLink(substring: string, ...args: string[]) {
        return `${args[0]}[${args[1]}](../user/OPTIONS#${args[2]})`;
    }

    let lines = content.split(/\r?\n/g);
    lines = lines.map(l => l.replace(/(##+) *`([^\(\)]+)` *(\(.+\))?/, fixOptionsHeaders));
    lines = lines.map(l => l.replace(/(CLI: *)(`(--[^`]+)`)/, addCliLink));
    return lines.join('\n');
}

function convertGithubAdmonitions(content: string): string {
    const admonitionRegex = /^> \[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*\n((?:^>.*\r?\n?)*)/gm;

    return content.replace(admonitionRegex, (_, type, body) => {
        const docusaurusType = type.toLowerCase();
        const cleanBody = body
            .split('\n')
            .map(line => line.replace(/^> ?/, ''))
            .filter(line => line.trim() !== '')
            .join('\n')
            .trim();

        return `:::${docusaurusType}\n\n${cleanBody}\n\n:::`;
    });
}

function fixContributingLinks(content: string): string {
    return content.replaceAll('doc/dev/', '');
}

function fixLinksToCodeOfConduct(content: string): string {
    return content.replaceAll('../../CODE_OF_CONDUCT', '02-CODE_OF_CONDUCT');
}

function fixImages(content: string): string {
    return content.replaceAll(/<img.*\/([^\/]+)\.png.*\/>/g, '![$1]($1.png)');
}

export { processUserOptions, processLibOptions, convertGithubAdmonitions, fixContributingLinks, fixImages, fixLinksToCodeOfConduct};
