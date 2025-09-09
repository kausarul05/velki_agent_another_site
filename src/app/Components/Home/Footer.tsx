// components/Footer.js
// import Link from "next/link";

export default function Footer() {
    return (
        <footer className="h-40 bg-gray-900 text-gray-400">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="h-40 flex flex-col items-center justify-center py-3 min-h-[56px]">
                    {/* Disclaimer */}
                    <p className="text-2xl text-white mb-1 text-center">
                        This site does not promote any gambling. Agent info only.
                    </p>

                    {/* Copyright and links */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                        <p className="text-base text-white text-center">
                            © 2025 Velki Agent List | Site Admin: Zitu king
                        </p>
                    </div>

                    <div className="mt-2">
                        <nav className="flex gap-2 sm:gap-4 items-center text-[11px] sm:text-xs">
                            {/* <Link href="/privacy"> */}
                            <a className="text-white hover:text-gray-200 transition-colors">Privacy Policy</a>
                            {/* </Link> */}

                            <span className="hidden sm:inline text-gray-600">|</span>

                            {/* <Link href="/terms"> */}
                            <a className="text-white hover:text-gray-200 transition-colors">Terms &amp; Conditions</a>
                            {/* </Link> */}

                            <span className="hidden sm:inline text-gray-600">|</span>

                            {/* <Link href="/about"> */}
                            <a className="text-white hover:text-gray-200 transition-colors">About Us</a>
                            {/* </Link> */}

                            <span className="hidden sm:inline text-gray-600">|</span>

                            {/* <Link href="/contact"> */}
                            <a className="text-white hover:text-gray-200 transition-colors">Contact</a>
                            {/* </Link> */}
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}