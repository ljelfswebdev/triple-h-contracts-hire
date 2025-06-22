import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return ( 
        <Link href="/" className="p-2 rounded-lg bg-white">
             <Image src="/logo.png" alt="Triple H Contracts & Hire" width={100} height={80} />
        </Link>
     );
}
 
export default Logo;