export default function MapSection() {
    return (<section className="h-[400px] bg-navy-200 relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-16 h-16 text-navy-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <p className="text-navy-500 font-heading font-medium">Interactive Map</p>
          <p className="text-navy-400 text-sm mt-1">Map integration available upon deployment</p>
        </div>
      </div>
    </section>);
}
