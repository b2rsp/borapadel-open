import { Button } from "@/components/ui/button";
import { PrismaClient } from "@borapadel/prisma";

const prisma = new PrismaClient();

export default async function Home() {
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.dir(usersWithPosts);
  return (
    <div>
      <Button>Click me</Button>
    </div>
  );
}
