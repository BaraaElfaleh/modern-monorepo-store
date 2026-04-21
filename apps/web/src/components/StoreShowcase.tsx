import {
  Navbar,
  Button,
  Badge,
  Card,
  CardImage,
  CardTitle,
  CardDescription,
  Input,
  Heading1,
  Paragraph,
} from "../../../../packages/ui/src";

const products = [
  {
    id: 1,
    name: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    desc: "Premium sound quality",
  },
  {
    id: 2,
    name: "Camera",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    desc: "4K cinematic capture",
  },
];

export default function StoreDemo() {
  return (
    <div className="min-h-screen bg-background text-text-main">
      <Navbar />

      <section className="p-10 text-center">
        <Heading1>Modern Store</Heading1>
        <Paragraph>Simple, clean and fast design system</Paragraph>

        <div className="mt-6 flex justify-center gap-2">
          <Input placeholder="Search..." />
          <Button>Search</Button>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 p-10">
        {products.map((p) => (
          <Card key={p.id}>
            <CardImage src={p.image} />
            <CardTitle>{p.name}</CardTitle>
            <CardDescription>{p.desc}</CardDescription>

            <div className="mt-4 flex justify-between items-center">
              <Badge>New</Badge>
              <Button size="sm">Buy</Button>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}