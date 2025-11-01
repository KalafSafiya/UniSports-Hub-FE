function NewsSection() {
    const news = [
        {
            category: "Matches",
            title: "Sri Lanka University Games – 2025",
            description: "Sri Lanka University Games 2025 Scheduled to be on 05th September 2025 to 21st September 2025 at Rajarata university of Sri Lanka.",
            date: "Sept 05, 2025",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCsGVuZNx7amAIRiv5Gis82XKvKBtYTyczgpvwCFrrt-XYjl75n3s5NOdGskCkpl9IBMWgFvqeZBik_htA7HmNaNOxL6FAn3EApMd4Qhm7EB4Xl1rizZtIKcN7m92X2oDZT9LnjFyMTvtH75dyWp5I01tqNLrKgCqWalb9EE0YSyMFU-x_kbAtanaiCFfgR41dpyte71gQjwqthx3Olr03_u0iea3_ttv6gdnTc_-j80GBbDZaiM4jtWBiyVtjkwv4QIGadXN3bXII",
        },
        {
            category: "Events",
            title: "Viksit Bharat Run 2025",
            description: "University of Vavuniya actively participated in the Viksit Bharat Run 2025, organized by the Consulate General of India in Jaffna on Sunday, 28th September 2025.",
            date: "June 25, 2024",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNHE7p-fbAAya-DPp4Wtg3Cz8s6mPnvlb8EIUPtgPYJhRUwYSFwmDsDrI6UinEt37W-xMSXTrJoUduoAAAHJ1c2zFS7xYmRxlR-1bS_fcZUK9EpR038DNdr-YE87oyCo72kvRbE70itrclKcS3_0B3eXgi-3loDCbpKmY5N_163RysJqdw_dwvvgQ64Ds0CG2USozIAidjcabIWfFwU3Eg15eIRkQqtIvJUzrp7gb2XZg_yBVWWLMY0GyPGmjCqnZIHjI2PH-_sjc",
        },
        {
            category: "Volleyball",
            title: "Friendly Volleyball Match Against Indian Embassy Officials",
            description: "A friendly volleyball match between the University of Vavuniya community and officials of the Indian Embassy was successfully held at the University of Vavuniya Volleyball Court on 19th September 2025.",
            date: "Oct 03, 2025",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcPpxMYYsD0DUA-p6fE_ghCXgzEQFgBQ6dJuxnZYuyZBE6U8Cj_AqvA7RriBDTxNUzvkETDg9Dh0gmVHoua1UQYXR20sVmJtzbC0E7Dq5jQgmHOfLqQDcBnQTnsgsyHobsYCyQkk_lNPIHfIyqGOff4-Z3BDmPYC8DbPshkPFLJYEE5urTUCvqx7G7kFqZf8t2W0k0J0HdWnH-v706-O0rI7JLtscHHXPjtTR4lL4obb67WOos8SkupaN7FjBDj8qMjOc4UQefDTw",
        },
    ];

    return (
        <section className="mt-12">
            <h2 className="border-b border-stone-200 pb-4 text-3xl font-bold text-stone-900 dark:border-stone-800 dark:text-stone-100">Recent News</h2>
            <div className="mt-6 space-y-8">
                {news.map((item) => (
                    <article key={item.title} className="flex flex-col gap-4 sm:flex-row">
                        <div className="sm:w-2/3">
                            <p className="text-xs font-medium uppercase tracking-wider text-primary">{item.category}</p>
                            <h3 className="mt-1 text-xl font-bold leading-snug text-stone-900 dark:text-stone-100">{item.title}</h3>
                            <p className="mt-2 text-base text-stone-700 dark:text-stone-300">{item.description}</p>
                            <p className="mt-3 text-sm text-stone-500 dark:text-stone-400">{item.date}</p>
                        </div>
                        <div
                            className="h-48 flex-shrink-0 rounded-lg bg-cover bg-center sm:h-auto sm:w-1/3"
                            style={{ backgroundImage: `url(${item.image})` }}
                        ></div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default NewsSection;
