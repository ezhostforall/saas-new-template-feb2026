import { Button } from '@crm/ui';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function CTAButton({ href, children }: CTAButtonProps) {
  return (
    <a href={href}>
      <Button size="lg" className="text-lg font-semibold">
        {children}
      </Button>
    </a>
  );
}