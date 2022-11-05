import { useId } from "react";
import { capitalize } from "lodash";
import Image from "next/image";

// ** COMPONENTS
import { Layout, Card } from "../components";
import { MdArrowRightAlt } from "react-icons/md";

// ** MOCK DATA
import { services } from "../public/data";

const Service = () => {
  const cardId = useId();

  return (
    <Layout>
      <div className="flex flex-col items-start w-full px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-64 pt-24 h-full bg-white">
        <h1 className="text-5xl text-left text-black my-6">
          Services provide for
          <br />
          <span className="text-5xl font-bold">Christmas Shop</span>
        </h1>
        <section className="my-8 flex flex-col sm:flex-row gap-6">
          {services.map((service, index) => (
            <Card key={`${cardId}-${index}`}>
              <Card.Header>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={100}
                  height={100}
                  style={{
                    flexShrink: 0,
                    minWidth: "100%",
                    minHeight: "100%",
                  }}
                />
              </Card.Header>
              <Card.Body>
                <h1 className="text-3xl font-bold my-4">
                  {capitalize(service.title)}
                </h1>
                <span className="text-justify text-base">{service.body}</span>
              </Card.Body>
              <Card.Footer>
                <span className="flex items-center gap-2 text-cyan-700">
                  Learn More <MdArrowRightAlt />
                </span>
              </Card.Footer>
            </Card>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Service;
