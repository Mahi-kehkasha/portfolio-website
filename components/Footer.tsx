'use client';

export default function Footer() {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Maheen Kehkasha. All rights
          reserved.
        </p>
        <p className="text-muted-foreground mt-2">
          Bengaluru, Karnataka, India
        </p>
      </div>
    </footer>
  );
}
