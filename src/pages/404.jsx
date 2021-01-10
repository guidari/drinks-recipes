import Image from 'next/image';
import Link from 'next/link';
import { Container } from '../styles/pages/404';

export default function NotFound() {
  return (
    <Container>
    <h1>Oops, looks like you didn't find your drink...</h1>
    <Image
      src="/images/404.svg"
      alt="Picture of the author"
      width={500}
      height={500}
    />
    <Link href="/">
      <a><h2>Back to home</h2></a>
    </Link>
    </Container>
  )
}