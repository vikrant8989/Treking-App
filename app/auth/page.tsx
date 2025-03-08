import { SignInForm } from "@/components/ui/signin-form";
import { SignupForm } from "@/components/ui/signup-form";

export default function AuthPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row w-full justify-center mx-auto gap-6">
        <div className="w-full lg:w-[30%]">
          <SignInForm />
        </div>
        <div className="h-px w-full bg-border sm:hidden" />
        <div className="w-full lg:w-[70%]">
          <SignupForm />
        </div>
      </div>
    </div>
  );
}
