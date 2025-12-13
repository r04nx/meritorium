"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tagline } from "@/components/pro-blocks/landing-page/tagline";

export function StatsSection4() {
  return (
    <section className="bg-background section-padding-y border-b">
      <div className="container-padding-x container mx-auto">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
            <Tagline>Our Team</Tagline>
            <h2 className="heading-lg text-foreground">Meet the Experts</h2>
            <p className="text-muted-foreground">
              Our faculty comprises industry experts and academic scholars dedicated to your success.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 lg:flex-row">
            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <img src="/team-1.jpg" alt="Prof. Pranav Nerurkar" className="w-24 h-24 rounded-full object-cover" />
                <div className="text-center">
                  <h3 className="text-foreground text-xl font-semibold">Prof. Pranav Nerurkar</h3>
                  <p className="text-primary font-medium">Post-Doctoral Fellow (France)</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    PhD in Data Science. Expert in Machine Learning and Deep Learning.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <img src="/team-2.jpg" alt="Prof. Rajkumar Yadav" className="w-24 h-24 rounded-full object-cover" />
                <div className="text-center">
                  <h3 className="text-foreground text-xl font-semibold">Prof. Rajkumar Yadav</h3>
                  <p className="text-primary font-medium">IT Software Programmer</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    B.Tech (Electrical Engineering), IIT Madras. Expert in Applied Mathematics.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary rounded-xl border-none p-6 shadow-none">
              <CardContent className="flex flex-col items-center gap-4 p-0">
                <img src="/team-3.jpg" alt="Ashok Wathore" className="w-24 h-24 rounded-full object-cover" />
                <div className="text-center">
                  <h3 className="text-foreground text-xl font-semibold">Ashok Wathore</h3>
                  <p className="text-primary font-medium">Career Counselor</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Dedicated to guiding students towards the right career path.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
