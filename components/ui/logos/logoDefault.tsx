import Image from "next/image";
import LogoMasterBlack from '../../../public/images/logos/logo_master_black.png'


export default function LogoDefault(){
    return(
        <>
            <Image src={LogoMasterBlack} alt={'Logo'}/>
        </>
    )
}