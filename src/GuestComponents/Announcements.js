function Announcements() {
    const announcements = [
        {
            title: "Ground Booking System Now Available",
            description: "Book your sports grounds easily through our new online booking system. Check availability and reserve your slots now.",
            link: "#",
        },
        {
            title: "Sports Council Meeting Schedule",
            description: "The next Sports Council meeting is scheduled for July 15th. All members are requested to attend.",
        },
    ];

    return (
        <section className="mt-12">
            <h2 className="border-b border-stone-200 pb-4 text-3xl font-bold text-stone-900 dark:border-stone-800 dark:text-stone-100">Announcements</h2>
            <div className="mt-6 space-y-6">
                {announcements.map((a, i) => (
                    <div key={i} className="rounded-lg bg-stone-100 p-4 dark:bg-stone-900/50">
                        <h3 className="font-bold text-stone-900 dark:text-stone-100">{a.title}</h3>
                        <p className="mt-1 text-sm text-stone-700 dark:text-stone-300">{a.description}</p>
                        {a.link && <a href={a.link} className="mt-2 inline-block text-sm font-bold text-primary hover:underline">Book Now →</a>}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Announcements;
