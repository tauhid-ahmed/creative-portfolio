export function BackgroundGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background/10 to-background z-0" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-10">
        <div className="absolute w-72 h-72 rounded-full bg-primary top-1/6 left-1/5 blur-3xl animate-blob1" />
        <div className="absolute w-64 h-64 rounded-full bg-primary top-2/3 left-2/3 blur-3xl animate-blob2" />
        <div className="absolute w-80 h-80 rounded-full bg-primary top-1/2 left-1/2 blur-3xl animate-blob3" />
      </div>

      <style jsx>{`
        @keyframes blob1 {
          0% {
            transform: translate(-50%, -50%) translate(-400px, -150px);
          }
          100% {
            transform: translate(-50%, -50%) translate(100px, 300px);
          }
        }
        @keyframes blob2 {
          0% {
            transform: translate(-50%, -50%) translate(100px, 200px);
          }
          100% {
            transform: translate(-50%, -50%) translate(-250px, -300px);
          }
        }
        @keyframes blob3 {
          0% {
            transform: translate(-50%, -50%) translate(100px, 100px);
          }
          100% {
            transform: translate(-50%, -50%) translate(-150px, -200px);
          }
        }
        .animate-blob1 {
          animation: blob1 18s infinite alternate linear;
        }
        .animate-blob2 {
          animation: blob2 18s infinite alternate linear;
        }
        .animate-blob3 {
          animation: blob3 18s infinite alternate linear;
        }
      `}</style>
    </div>
  );
}
