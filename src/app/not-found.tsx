import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Container>
        <div className="mx-auto max-w-lg text-center">
          <p className="font-heading text-8xl font-bold text-saffron-400">
            404
          </p>
          <h1 className="mt-4 font-heading text-3xl font-bold text-white">
            Page Not Found
          </h1>
          <p className="mt-4 text-warm-400">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let us help you find your way.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <ButtonLink href="/">Go Home</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </div>
  );
}
