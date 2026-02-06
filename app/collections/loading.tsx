export default function Loading() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Loading skeleton */}
        <div className="animate-pulse">
          <div className="h-12 bg-sand-200 rounded w-1/2 mx-auto mb-8"></div>
          <div className="h-6 bg-sand-200 rounded w-1/3 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-[3/4] bg-sand-200 rounded"></div>
                <div className="h-4 bg-sand-200 rounded w-3/4"></div>
                <div className="h-4 bg-sand-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
