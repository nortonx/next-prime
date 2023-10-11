
import Link from "next/link";
import { Button } from 'primereact/button'


export default function Home() {
  return (
    <main className="grid grid-nogutter surface-0 text-800">
      <div className="col-12 md:col-6 p-6 text-center md:text-left align-items-center">
        <section>
          <span className="block text-6xl font-bold mb-1">Norton Almeida</span>
          <div className="text-6xl text-primary font-bold mb-3">Senior Frontend Developer</div>
          <p className="mt-0 mb-4 text-700 line-height-3">
            Javascript | Vue.js | React | Typescript | Next.js
          </p>

          <Link href="https://www.linkedin.com/in/norton-almeida/">
            <Button
              label="LinkedIn Profile" 
              icon="pi pi-linkedin"
              type="button" 
              className="mr-3 p-button-raised" 
              link={true}
              severity="info"
              outlined
            />
          </Link>
        </section>
      </div>
      <div className="col-12 md:col-6 overflow-hidden">
        <img 
          src="Programming_code.jpg" 
          alt="Hero 1" 
          className="md:ml-auto block md:h-full"
          style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)'}}
        />
      </div>
    </main>
  )
}
