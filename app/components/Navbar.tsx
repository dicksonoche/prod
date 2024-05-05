import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='w-full h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'>EdGuide</h6>
        <ul className='flex gap-8'>
          <NavItem href="/">Home</NavItem>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#policy">Policy</NavItem>
          <NavItem href="#faq">FAQ</NavItem>
          <NavItem href="/login">Login</NavItem>
          <NavItem href="/signup">Sign Up</NavItem>
        </ul>
      </div>
    </div>
  );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className='hover:text-blue-400 transition-colors text-xs sm:text-base'>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
