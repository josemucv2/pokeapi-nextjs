import { AuthLayout } from "@/layouts/Auth";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();

  return (
    <main className="auth">
      <AuthLayout>
        <div className="space-y-10">
          <p className="text-center title-general">
            Gracias por esta oportunidad! Este proyecto utiliza tecnologías
            como:
          </p>
          <ul className="list-disc m-14">
            <li className='title-general'>Next.js</li>
            <li className='title-general'>TypeScript</li>
            <li className='title-general'>Server Side Rendering</li>
            <li className='title-general'>Tailwind CSS</li>
            <li className='title-general'>DaisyUI</li>
            <li className='title-general'>Axios</li>
          </ul>
          <div
            onClick={() => push("/login")}
            className="text-center hover:underline hover:text-blue-800 cursor-pointer"
          >
            ¡Haz Click para Iniciar!
          </div>
        </div>
      </AuthLayout>
    </main>
  );
}
