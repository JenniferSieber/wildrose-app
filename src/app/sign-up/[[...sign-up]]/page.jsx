import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center p-3 mt-5">
      <SignUp />
    </div>
  );
}