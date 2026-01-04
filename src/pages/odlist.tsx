import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import odPdf from '@/assets/odlist/BB_od_std.pdf';

const Odlist = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar forceSolid />
      <main className="pt-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            BALANCE-BYTES(Hackathon)
          </h1>

          <div className="mt-6 p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
            <h2 className="text-xl font-semibold mb-3">OD List</h2>
            <p className="text-muted-foreground mb-4">
              Download the OD list for BALANCE-BYTES(Hackathon).
            </p>
            <div className="flex items-center gap-3">
              <a href={odPdf} target="_blank" rel="noreferrer">
                <Button variant="outline" className="font-semibold">
                  View PDF
                </Button>
              </a>
              <a href={odPdf} download="BB_od_list.pdf" target="_blank" rel="noreferrer">
                <Button className="font-semibold">
                  Download BB_od_list.pdf
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Odlist;
