const sections = [
  {
    title: "Product",
    links: [
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },

  {
    title: "Social",
    links: [
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <section className="py-16 w-full flex justify-center items-center">
      <div className="container">
        <footer>
          <div className="flex flex-col md:flex-row justify-between px-8 gap-8 md:gap-32 max-sm:gap-32">
            <div className="">
              <img
                src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg"
                alt="logo"
                className="mb-4 h-7"
              />
              <p className="font-bold">footer content</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-32">
              {sections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 font-bold">{section.title}</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-24 max-sm:px-4 flex flex-col md:flex-row justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:items-center">
            <p>© 2024 Connect My circle. All rights reserved.</p>
            <ul className="flex gap-4">
              <li className="underline hover:text-primary">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="underline hover:text-primary">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
