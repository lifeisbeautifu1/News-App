import Link from 'next/link';

interface NavLinkProps {
  category: Category;
  isActive?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ category, isActive }) => {
  return (
    <Link className={`nav-link ${isActive && 'underline decoration-400'}`} href={`/news/${category}`}>
      {category}
    </Link>
  );
};

export default NavLink;
