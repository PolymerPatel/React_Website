"user client";
import { useRouter} from "next/navigation"

export default function User() {
    const router = userRouter();

    return ( 
    <div>
        <h1>{ URLSearchParams.id}</h1>
        <button onClick={ router.back}>Go Back</button>
    </div>
    );
}