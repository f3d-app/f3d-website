import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Admonition from '@theme/Admonition';
import Heading from '@theme/Heading';
import React from 'react';
import '@splidejs/react-splide/css/sea-green';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import CodeBlock from '@theme/CodeBlock';

const galleryItems = [
    {
        title: 'Animated realistic rendering',
        media: (
            <video
                src='https://user-images.githubusercontent.com/3129530/194735274-395839e9-e2cb-4a47-83b9-5c6987640032.webm'
                autoPlay
                loop
                muted
                playsInline
                style={{ maxWidth: '100%', height: 'auto', width: '700px' }}
            />
        ),
        command: 'f3d gearbox/scene.gltf --hdri-file=future_parking_2k.hdr -fjuqxtgas',
    },
    {
        title: 'Animated, skinned and morphed rendering',
        media: (
            <video
                src='https://user-images.githubusercontent.com/3129530/194734947-f34bc377-8ee4-472a-b130-30ce9e86facf.webm'
                autoPlay
                loop
                muted
                playsInline
                style={{ maxWidth: '100%', height: 'auto', width: '700px' }}
            />
        ),
        command: 'f3d dota/scene.gltf --hdri-file=future_parking_2k.hdr -fjuqxtgas',
    },
    {
        title: 'Animated scientific visualization rendering',
        media: (
            <video
                src='https://user-images.githubusercontent.com/3129530/194735269-b62216e6-33da-484c-9f0d-39befc8253bf.webm'
                autoPlay
                loop
                muted
                playsInline
                style={{ maxWidth: '100%', height: 'auto', width: '700px' }}
            />
        ),
        command:
            'f3d can.ex2 -xtgans --up=+Z --scalar-coloring --coloring-array=VEL --animation-speed-factor=0.005',
    },
    {
        title: '3D Gaussians Splatting',
        media: (
            <video
                src='https://media.githubusercontent.com/media/f3d-app/f3d-media/main/media/counter.webm'
                autoPlay
                loop
                muted
                playsInline
                style={{ maxWidth: '100%', height: 'auto', width: '700px' }}
            />
        ),
        command:
            'f3d counter.splat --point-sprites-size=1 --point-sprites-type=gaussian -soynxz --up=-Y --camera-position=0,1,-5.2 --camera-focal-point=0,1,0',
    },
    {
        title: 'Direct scalars rendering of a point cloud',
        media: (
            <img
                src='https://user-images.githubusercontent.com/3129530/194735272-5bcd3e7c-a333-41f5-8066-9b0bec9885e8.png'
                width={700}
                alt='Direct scalars rendering of a point cloud'
            />
        ),
        command:
            'f3d Carola_PointCloud.ply --point-size=0 --coloring-component=-2 -sofj --coloring-array=RGBA --up=+Z --hdri-file=venice_sunset_8k.hdr',
    },
    {
        title: 'Raytraced CAD assembly',
        media: (
            <img
                src='https://user-images.githubusercontent.com/3129530/194735378-b8be4df2-e030-4d13-b12f-24806cbb385b.png'
                width={700}
                alt='Raytraced CAD assembly'
            />
        ),
        command: 'f3d 202.vtp -xtgans -rd --raytracing-samples=10 --coloring-range=-2,9',
    },
    {
        title: 'Volume rendering of a security bag scan',
        media: (
            <img
                src='https://user-images.githubusercontent.com/3129530/194735377-127fa5d8-ece5-40c7-8176-672279ebdacc.png'
                width={700}
                alt='Volume rendering of a security bag scan'
            />
        ),
        command:
            'f3d backpack.vti -vmn --coloring-range=300,1000 --colormap=0,#000000,1,#ffffff',
    },
    {
        title: 'Realistic rendering #1',
        media: (
            <img
                src='https://user-images.githubusercontent.com/3129530/194735376-3a476643-00d6-4cfc-9a88-e0dd33658564.png'
                width={700}
                alt='Realistic rendering #1'
            />
        ),
        command: 'f3d DamagedHelmet.glb --hdri-file=lebombo_4k.hdr -fjtuqap',
    },
    {
        title: 'Showcase of interactive widgets',
        media: (
            <img
                src='https://media.githubusercontent.com/media/f3d-app/f3d-media/95b76c22d927bb24759bbe0246b6260121f2933b/media/typical.png'
                width={700}
                alt='Showcase of interactive widgets'
            />
        ),
        command: 'f3d dragon.vtu -xtganse --coloring-component=0',
    },
    {
        title: 'Metallic Rendering of a STEP file',
        media: (
            <img
                src='https://user-images.githubusercontent.com/3129530/194735370-4d1f067c-704c-4118-9d94-c1adf4039c39.png'
                width={700}
                alt='Metallic Rendering of a STEP file'
            />
        ),
        command:
            'f3d eta_asm.stp --hdri-file=future_parking_2k.hdr -fjuqxtga --up=+Z --metallic=1 --roughness=0.6 --color=0.98,0.90,0.59 --scalar-coloring=false',
    },
    {
        title: 'Rendering of a FBX file',
        media: (
            <img
                src='https://user-images.githubusercontent.com/3129530/194735366-e79a8d45-8b76-4a65-9445-4a0ca1b63876.png'
                width={700}
                alt='Rendering of a FBX file'
            />
        ),
        command: 'f3d zeldaPosed001.fbx --hdri-file=hikers_cave_2k.hdr -fjuqxtga --light-intensity=1.5',
    },
    {
        title: 'Realistic rendering #2',
        media: (
            <img
                src='https://user-images.githubusercontent.com/3129530/194735363-d2be23bb-90b6-4e90-941d-14b6dc24b476.png'
                width={700}
                alt='Realistic rendering #2'
            />
        ),
        command: 'f3d FlightHelmet.glb --hdri-file=lebombo_4k.hdr -fjtuqap',
    },
    {
        title: 'Visualization of a CFD velocity field',
        media: (
            <img
                src='https://user-images.githubusercontent.com/3129530/194735361-7e827d8e-531a-4938-b608-18825a9574f8.png'
                width={700}
                alt='Visualization of a CFD velocity field'
            />
        ),
        command:
            'f3d single-pin.vtp -xtbgans --coloring-range=-2,8 --colormap=0,0.3,0.7,0,0.7,0,0.1,1,1,0.8,0.8,0',
    },
    {
        title: 'Volume rendering of a medical skull scan',
        media: (
            <img
                src='https://user-images.githubusercontent.com/3129530/194735354-486999dd-3c57-4ab1-a9ad-b8e97bac0da0.png'
                width={700}
                alt='Volume rendering of a medical skull scan'
            />
        ),
        command: 'f3d skull.vti -vxbt --coloring-range=40,200 --camera-direction=1,0,0',
    },
    {
        title: 'Point cloud rendering using sprites',
        media: (
            <img
                src='https://user-images.githubusercontent.com/3129530/194735348-7dd14922-f546-4f54-8bc2-b6602617c4cc.png'
                width={700}
                alt='Point cloud rendering using sprites'
            />
        ),
        command: 'f3d pointCloud.vtp -o --point-size=0.2 --colormap=0,0,0.8,0,0.4,0.9,0,0,0.8,0.9,0.9,0,1,0.5,0.5,1 --up=+Z',
    },
];

export default function Gallery(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="F3D website">
            <div className="container">
                <Heading as="h1">
                    Gallery
                </Heading>
                <p>Examples of renderings with their associated command lines.</p>
            </div>
            <div className="container" style={{ marginTop: '4rem' }}>
                <Splide options={{ type: 'loop', perPage: 1, gap: '2rem', autoplay: true, pauseOnHover: true, pagination: true, arrows: true }}>
                    {galleryItems.map((item, idx) => (
                        <SplideSlide key={idx}>
                            <section style={{ textAlign: 'center' }}>
                                <Heading as="h3">{item.title}</Heading>
                                <div style={{ marginBottom: '1em' }}>{item.media}</div>
                                <CodeBlock>{item.command}</CodeBlock>
                            </section>
                        </SplideSlide>
                    ))}
                </Splide>
                <section>
                    <h2>Acknowledgments</h2>
                    <Admonition type="note">
                        Images and videos displayed below use public
                        datasets, you can download them{' '}
                        <a
                            href='https://drive.google.com/file/d/1hYGAHr67T7tBrUKFrCF_uc_jnvJaQF-A/view?usp=sharing'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            here
                        </a>
                        .
                    </Admonition>
                    <ul>
                        <li>
                            Bristleback DOTA Fan-Art by{' '}
                            <a href='https://sketchfab.com/Tolst'>Nikolay_Tsys</a>
                        </li>
                        <li>
                            SY Carola (point cloud) by{' '}
                            <a href='https://sketchfab.com/ScottishMaritimeMuseum'>
                                Scottish Maritime Museum
                            </a>
                        </li>
                        <li>
                            Gearbox Animation by{' '}
                            <a href='https://sketchfab.com/dzhusione'>DZHUSI ØNE</a>
                        </li>
                        <li>
                            Watch movement by <a href='https://grabcad.com/greg.brown'>Greg Brown</a>
                        </li>
                        <li>
                            Zelda - Breath Of The Wild by <a href='https://sketchfab.com/theStoff'>theStoff</a>
                        </li>
                        <li>
                            Venice Sunset HDRI and Hiker’s Cave HDRI by{' '}
                            <a href='https://polyhaven.com/hdris?a=Greg%20Zaal'>Greg Zaal</a>
                        </li>
                        <li>
                            Future Parking HDRI by{' '}
                            <a href='https://polyhaven.com/hdris?a=Sergej%20Majboroda'>Sergej Majboroda</a>
                        </li>
                    </ul>
                </section>
            </div>
        </Layout>
    );
}
