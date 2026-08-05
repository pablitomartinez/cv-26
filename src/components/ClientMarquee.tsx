// import React from "react";

// type Client = {
//   name: string;
//   logoUrl?: string;
//   website: string;
// };

// const clients: Client[] = [
//   { name: "Cliente Uno", website: "https://example.com" },
//   { name: "Cliente Dos", website: "https://example.com" },
//   { name: "Cliente Tres", website: "https://example.com" },
//   { name: "Cliente Cuatro", website: "https://example.com" },
//   { name: "Cliente Cinco", website: "https://example.com" },
//   { name: "Cliente Seis", website: "https://example.com" },
//   { name: "Cliente Siete", website: "https://example.com" },
//   { name: "Cliente Ocho", website: "https://example.com" },
// ];

// const fadeMask =
//   "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)";

// const ClientMarquee: React.FC = () => {
//   const loopedClients = [...clients, ...clients];

//   return (
//     <section className="w-full bg-background py-4">
//       <div className="border-y border-white/10" style={{ borderTopWidth: "0.5px", borderBottomWidth: "0.5px" }}>
//         <div
//           className="overflow-hidden"
//           style={{
//             maskImage: fadeMask,
//             WebkitMaskImage: fadeMask,
//           }}
//         >
//           <div className="client-marquee-track flex min-w-max items-center">
//             {loopedClients.map((client, index) => (
//               <a
//                 key={`${client.name}-${index}`}
//                 href={client.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={`Visitar ${client.name}`}
//                 className="group/client flex h-16 w-1/2 shrink-0 items-center justify-center px-3 sm:w-1/3 md:w-1/4 lg:w-1/5"
//               >
//                 {client.logoUrl ? (
//                   <img
//                     src={client.logoUrl}
//                     alt={client.name}
//                     className="h-5 w-auto object-contain grayscale opacity-45 transition-opacity duration-500 group-hover/client:opacity-90 sm:h-6"
//                   />
//                 ) : (
//                   <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/45 transition-opacity duration-500 group-hover/client:opacity-90 sm:text-xs">
//                     {client.name}
//                   </span>
//                 )}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style>{`
//         .client-marquee-track {
//           animation: client-marquee-left 39s linear infinite;
//           will-change: transform;
//         }

//         @keyframes client-marquee-left {
//           from { transform: translateX(0); }
//           to { transform: translateX(-50%); }
//         }

//         @media (max-width: 640px) {
//           .client-marquee-track {
//             animation-duration: 31s;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .client-marquee-track {
//             animation: none;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ClientMarquee;
