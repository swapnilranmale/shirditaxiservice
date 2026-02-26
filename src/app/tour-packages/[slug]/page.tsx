import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  MapPin,
  ArrowLeft,
  Phone,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
} from "lucide-react";
import { tourPackages } from "@/data/tours";
import { formatPrice } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function generateStaticParams() {
  return tourPackages.map((tour) => ({ slug: tour.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const tour = tourPackages.find((t) => t.slug === params.slug);
  if (!tour) return {};
  return {
    title: tour.name,
    description: tour.shortDescription,
  };
}

const tourImages: Record<string, string> = {
  trambakeshwar:
    "https://images.unsplash.com/photo-1621427637140-7fa64a186e8e?w=1920&q=80",
  ghrushneshwar:
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1920&q=80",
  bhimashankar:
    "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1920&q=80",
  "three-jyotirlinga":
    "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1920&q=80",
  "shani-shingnapur":
    "https://images.unsplash.com/photo-1564804955013-e02ce25e3ec6?w=1920&q=80",
  "ellora-caves":
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=1920&q=80",
  "ajanta-caves":
    "https://images.unsplash.com/photo-1621427637140-7fa64a186e8e?w=1920&q=80",
};

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = tourPackages.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${tourImages[tour.id] || tourImages.trambakeshwar}')`,
            }}
          />
          <div className="absolute inset-0 bg-brand-950/80" />
        </div>
        <Container className="relative z-10">
          <Link
            href="/tour-packages"
            className="inline-flex items-center gap-2 text-sm text-warm-400 hover:text-saffron-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Tours
          </Link>

          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <span className="inline-block rounded-full bg-saffron-400/90 px-3 py-1 text-xs font-semibold text-brand-950 capitalize">
                  {tour.category}
                </span>
                {tour.closedOn && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-red-500/90 px-3 py-1 text-xs font-medium text-white">
                    <AlertTriangle className="h-3 w-3" />
                    Closed {tour.closedOn}
                  </span>
                )}
              </div>
              <h1 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {tour.name}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-warm-400">
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-saffron-400" />
                  {tour.duration}
                </span>
                {tour.distance && (
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-saffron-400" />
                    {tour.distance}
                  </span>
                )}
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-warm-500">Starting from</span>
              <p className="font-heading text-3xl font-bold text-saffron-400">
                {formatPrice(tour.startingPrice)}
              </p>
              <span className="text-xs text-warm-500">per vehicle</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  About This Tour
                </h2>
                <p className="text-warm-300 leading-relaxed">{tour.description}</p>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-white mb-4">
                  Tour Highlights
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {tour.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-start gap-3 rounded-xl border border-white/5 bg-brand-900 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-saffron-400 mt-0.5" />
                      <span className="text-sm text-warm-200">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-4">
                    Inclusions
                  </h3>
                  <ul className="space-y-2">
                    {tour.inclusions.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-warm-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-white mb-4">
                    Exclusions
                  </h3>
                  <ul className="space-y-2">
                    {tour.exclusions.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-warm-300">
                        <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Important Notes */}
              {tour.importantNotes.length > 0 && (
                <div className="rounded-2xl border border-saffron-400/20 bg-saffron-400/5 p-6">
                  <h3 className="flex items-center gap-2 font-heading text-xl font-semibold text-white mb-4">
                    <Info className="h-5 w-5 text-saffron-400" />
                    Important Notes
                  </h3>
                  <ul className="space-y-2">
                    {tour.importantNotes.map((note) => (
                      <li key={note} className="flex items-start gap-2 text-sm text-warm-300">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saffron-400" />
                        {note}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-28 space-y-6">
                {/* Booking Card */}
                <div className="rounded-2xl border border-white/5 bg-brand-900 p-6">
                  <h3 className="font-heading text-xl font-semibold text-white mb-2">
                    Book This Tour
                  </h3>
                  <p className="text-sm text-warm-400 mb-6">
                    Contact us to customize this tour and get the best pricing
                    for your group.
                  </p>

                  <div className="space-y-3">
                    <a
                      href={`tel:${SITE_CONFIG.phone}`}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-saffron-400 py-3 text-sm font-semibold text-brand-950 transition-all hover:bg-saffron-500"
                    >
                      <Phone className="h-4 w-4" />
                      Call to Book
                    </a>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Hi! I'm interested in the ${tour.name} package.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 py-3 text-sm font-medium text-warm-200 transition-all hover:border-saffron-400/50 hover:text-white"
                    >
                      WhatsApp Inquiry
                    </a>
                  </div>
                </div>

                {/* Quick Info */}
                <div className="rounded-2xl border border-white/5 bg-brand-900 p-6 space-y-4">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    Quick Info
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-warm-400">
                      <span>Duration</span>
                      <span className="text-warm-200">{tour.duration}</span>
                    </div>
                    {tour.distance && (
                      <div className="flex justify-between text-warm-400">
                        <span>Distance</span>
                        <span className="text-warm-200">{tour.distance}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-warm-400">
                      <span>Starting Price</span>
                      <span className="text-saffron-400 font-semibold">
                        {formatPrice(tour.startingPrice)}
                      </span>
                    </div>
                    <div className="flex justify-between text-warm-400">
                      <span>Category</span>
                      <span className="text-warm-200 capitalize">{tour.category}</span>
                    </div>
                    {tour.closedOn && (
                      <div className="flex justify-between text-warm-400">
                        <span>Closed On</span>
                        <span className="text-red-400">{tour.closedOn}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
