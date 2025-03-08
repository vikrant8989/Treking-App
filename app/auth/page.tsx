import { SignInForm } from "@/components/ui/signin-form"
import { SignupForm } from "@/components/ui/signup-form"

export default function AuthPage() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="sm:flex  md:flex lg:flex w-full justify-center mx-auto">
        <div className="w-full lg:w-[30%]">
          <SignInForm />
        </div>
        <div className="w-full lg:w-[70%]">
          <SignupForm />
        </div>
      </div>
    </div>
  )
}

