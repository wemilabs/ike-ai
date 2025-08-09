import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import { Announcement } from "./announcement";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <section>
        <div className="relative pt-24 md:pt-36">
          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    delayChildren: 1,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring" as const,
                    bounce: 0.3,
                    duration: 2,
                  },
                },
              },
            }}
            className="absolute inset-0 -z-20"
          >
            <Image
              src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
              alt="background"
              className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
              width="3276"
              height="4095"
              priority
              sizes="(min-width: 1280px) 1280px, 100vw"
            />
          </AnimatedGroup>
          <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
              <AnimatedGroup variants={transitionVariants}>
                <Announcement />
              </AnimatedGroup>

              <TextEffect
                preset="fade-in-blur"
                speedSegment={0.3}
                as="h1"
                className="mt-8 text-balance text-4xl md:text-6xl lg:mt-16 font-semibold"
              >
                Learn any topic in real-time with AI.
              </TextEffect>

              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="mx-auto mt-8 max-w-2xl text-balance text-base md:text-lg font-medium"
              >
                Build customizable AI-powered mentors and no longer lack
                knowledge on any subject. New skills at your fingertips.
              </TextEffect>

              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12"
              >
                <div className="flex flex-col items-center justify-center gap-2 sm:flex-row lg:hidden">
                  <div
                    key={1}
                    className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button asChild size="lg" className="rounded-xl px-5">
                      <Link href="/dashboard">
                        <span className="text-nowrap">Start Journeying</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="rounded-xl px-5"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Request a demo</span>
                    </Link>
                  </Button>
                </div>

                <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-3">
                  <div className="flex items-center gap-1">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">
                      Real-time
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">
                      Customizable
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Check className="size-4 text-green-500" />
                    <span className="text-sm text-muted-foreground">
                      24/7 Support
                    </span>
                  </div>
                </div>
              </AnimatedGroup>
            </div>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
              <div
                aria-hidden
                className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35% [transform:rotateX(20deg);]"
              />
              <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 skew-x-[.36rad]">
                <Image
                  src="https://ubrw5iu3hw.ufs.sh/f/TFsxjrtdWsEImhdQriSp37LwhtgkreHYdqObMmJu5FG9zDis"
                  alt="app screen"
                  width="2700"
                  height="1440"
                  className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                />
                <Image
                  src="https://ubrw5iu3hw.ufs.sh/f/TFsxjrtdWsEIJzcFyx4OstxEZrb4kYXLV8RynuaWBqiT019K"
                  alt="app screen"
                  width="2700"
                  height="1440"
                  className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                />
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
      <section className="bg-background pb-16 pt-16 md:pb-32">
        <div className="group relative m-auto max-w-5xl px-6">
          <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
            <Link
              href="/"
              className="block text-sm duration-150 hover:opacity-75"
            >
              <span> Meet Our Customers</span>

              <ChevronRight className="ml-1 inline-block size-3" />
            </Link>
          </div>
          <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
            <div className="flex">
              <Image
                className="mx-auto h-5 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nvidia.svg"
                alt="Nvidia Logo"
                height={20}
                width={20}
              />
            </div>

            <div className="flex">
              <Image
                className="mx-auto h-4 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/column.svg"
                alt="Column Logo"
                height={20}
                width={20}
              />
            </div>
            <div className="flex">
              <Image
                className="mx-auto h-4 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/github.svg"
                alt="GitHub Logo"
                height={20}
                width={20}
              />
            </div>
            <div className="flex">
              <Image
                className="mx-auto h-5 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/nike.svg"
                alt="Nike Logo"
                height={20}
                width={20}
              />
            </div>
            <div className="flex">
              <Image
                className="mx-auto h-5 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                alt="Lemon Squeezy Logo"
                height={20}
                width={20}
              />
            </div>
            <div className="flex">
              <Image
                className="mx-auto h-4 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/laravel.svg"
                alt="Laravel Logo"
                height={20}
                width={20}
              />
            </div>
            <div className="flex">
              <Image
                className="mx-auto h-7 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/lilly.svg"
                alt="Lilly Logo"
                height={28}
                width={28}
              />
            </div>

            <div className="flex">
              <Image
                className="mx-auto h-6 w-fit dark:invert"
                src="https://html.tailus.io/blocks/customers/openai.svg"
                alt="OpenAI Logo"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
