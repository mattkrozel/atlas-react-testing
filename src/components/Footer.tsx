export default function Footer() {
  const year = new Date().getFullYear();
  return <div className="text-center p-8 text-red">&copy; {year} Atlas School</div>;
}
