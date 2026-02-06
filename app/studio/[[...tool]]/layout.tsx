import { ReactNode } from 'react';

export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

interface StudioLayoutProps {
  children: ReactNode;
}

export default function StudioLayout({ children }: StudioLayoutProps) {
  return <>{children}</>;
}
