import Image from 'next/image'


export default function LandingPage(props) {

    return (
        <div style={{height: '500px', position: 'relative'}}>
            <Image src='/LandingPageImg.jpeg' layout='responsive' width='800' height='300'/>
        </div>
    )
}