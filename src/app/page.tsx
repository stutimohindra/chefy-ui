import { Heading, Separator, Text } from "@radix-ui/themes";
import Image from "next/image";
import Header from "./ui-header/Header";
import {
  CoreValues,
  Heading as HeadingStyle,
  HeroBanner,
  HeroBannerText,
  SeparatorRoot,
  TextContainer,
  TextContainerParent,
} from "./styles.css";
import Person from "./icons/Person";

// Metadata for the page coming from a CMS or static file
export const metadata = {
  title:
    " Discover Culinary Excellence by Hiring talented home chefs by the hour",
  coreValues: [
    { title: "Excellence", description: "Unforgettable Culinary Experiences" },
    { title: "Innovation", description: "Dynamic, Fresh, Exciting Flavors" },
    { title: "Quality", description: "Source to Plate Culinary Delights" },
    { title: "Sustainability", description: "Eco-friendly Dining Practices" },
  ],
  CoreValuesTitle: "OUR CORE VALUES",
};

export default function HomePage() {
  return (
    <>
      <Header isLoggedIn={false} />
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <Heading size="7" className={HeadingStyle} align="center">
          {metadata.title}
        </Heading>
        <div className={HeroBanner}>
          <Image
            src="/landingPage.webp"
            alt="Landing page image"
            width={600}
            height={600}
            priority
          />{" "}
        </div>

        <div className={HeroBannerText}>
          <div style={{ marginBottom: 24 }}>
            <Text size="7" className={TextContainer}>
              {metadata.CoreValuesTitle}
            </Text>
          </div>
          <div className={TextContainerParent}>
            {metadata.coreValues.map((value, i) => (
              <div key={value.title} className={CoreValues}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                    paddingRight: "12px",
                  }}
                >
                  <Person />
                  <Text size="4" className={TextContainer}>
                    {value.title}
                  </Text>
                  <Text size="1" className={TextContainer}>
                    {value.description}
                  </Text>
                </div>
                {i < metadata.coreValues.length - 1 && (
                  <Separator className={SeparatorRoot} orientation="vertical" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
