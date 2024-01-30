import Link from "next/link";

export default function DropDownMenu() {
  return (
    <div>
      <nav>
        <Link href="/app/chat">
          <div>
            <span>Profile</span>
          </div>
        </Link>
        <Link href="/app/chat">
          <div>
            <span>deconnection</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}
