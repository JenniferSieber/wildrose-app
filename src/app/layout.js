import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";


export const metadata = {
  title: "Wild Rose Estates",
  description: "App providing premium services in all facets of real estate.",
  keywords:
    "Wild Rose Properties, real estate, property listings, home search, house for sale, house for rent, apartment for rent, property investment, investments, home loans, mortgage calculator, open houses, realtors, real estate agents, real estate near me, realtors near me, commercial real estate, residential properties, luxury homes, tiny homes, affordable homes, real estate deals, property management, foreclosure properties, real estate tools, retirement communities, title companies, title agent, home insurance, high-density housing, condos, condominiums, townhomes, townhouses, hoa, homeowners association",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}