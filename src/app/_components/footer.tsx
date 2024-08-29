import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 text-center">
          <h3 className="text-4xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4">
            <a
              href={`https://github.com/eastwood/eastwood.github.io`}
              className="mx-3 font-bold hover:underline"
            >
              Forked and made with ❤️ by eastwood
            </a>
          </h3>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
