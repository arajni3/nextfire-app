import Link from "next/link";

// top navbar
export default function Navbar() {
    const user = null;
    const username = null;

    return (
    <nav className="navbar">
        <ul>
            <li>
                <Link href="/">
                    <button>FEED</button>
                </Link>
            </li>
            {username && (
                <>
                <li>
                    <Link href="/admin">
                        <button>Write Posts</button>
                    </Link>
                </li>
                <li>
                    <Link href={`${username}`}>
                        <img src={user?.photoURL} />
                    </Link>
                </li>
                </>
            )}
            {!username && (
                <li>
                    <Link href="/enter">
                        <button className="btn btn-blue">Log in</button>
                    </Link>
                </li>
            )}
        </ul>
    </nav>
    );
}
