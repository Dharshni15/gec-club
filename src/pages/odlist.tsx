import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import odPdf from '@/assets/odlist/BB_od_std.pdf';
import paperAttendance from '@/assets/odlist/Paper_Attendance (1).pdf';
import projectAttendance from '@/assets/odlist/PROJECT PRESENTATION ATTENDANCE (1).pdf';
import videoAttendance from '@/assets/odlist/VIDEO EDITING (1).pdf';
import figmaAttendance from '@/assets/odlist/FIGMA (1).pdf';
import codeAttendance from '@/assets/odlist/code debugging (1).pdf';
import cadAttendance from '@/assets/odlist/CAD ATTENDANCE (1).pdf';
import logoPoster from '@/assets/odlist/logo_poster.pdf';
import connectionsAttendance from '@/assets/odlist/connections (1).pdf';
import treasureAttendance from '@/assets/odlist/Attendance-Treasure-Hunt.pdf';

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

          <div className="mt-6 p-6 rounded-xl border bg-card text-card-foreground shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Prometheus</h2>
            <p className="text-muted-foreground mb-4">
              Prometheus is our inter-department symposium. Below are the events
              featured in Prometheus.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border bg-background/50 text-sm">
                <span>Paper Presentation</span>
                <a href={paperAttendance} target="_blank" rel="noreferrer" download>
                  <Button variant="ghost" size="sm">View</Button>
                </a>
              </div>

              <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border bg-background/50 text-sm">
                <span>Project Presentation</span>
                <a href={projectAttendance} target="_blank" rel="noreferrer" download>
                  <Button variant="ghost" size="sm">View</Button>
                </a>
              </div>

              <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border bg-background/50 text-sm">
                <span>Video Editing</span>
                <a href={videoAttendance} target="_blank" rel="noreferrer" download>
                  <Button variant="ghost" size="sm">View</Button>
                </a>
              </div>

              <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border bg-background/50 text-sm">
                <span>UI/UX Design (Figma)</span>
                <a href={figmaAttendance} target="_blank" rel="noreferrer" download>
                  <Button variant="ghost" size="sm">View</Button>
                </a>
              </div>

              <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border bg-background/50 text-sm">
                <span>Code Debugging</span>
                <a href={codeAttendance} target="_blank" rel="noreferrer" download>
                  <Button variant="ghost" size="sm">View</Button>
                </a>
              </div>

              <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border bg-background/50 text-sm">
                <span>CAD / TinkerCAD</span>
                <a href={cadAttendance} target="_blank" rel="noreferrer" download>
                  <Button variant="ghost" size="sm">View</Button>
                </a>
              </div>

              <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border bg-background/50 text-sm">
                <span>Logo Design / Poster Design</span>
                <a href={logoPoster} target="_blank" rel="noreferrer" download>
                  <Button variant="ghost" size="sm">View</Button>
                </a>
              </div>

              <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border bg-background/50 text-sm">
                <span>Connections</span>
                <a href={connectionsAttendance} target="_blank" rel="noreferrer" download>
                  <Button variant="ghost" size="sm">View</Button>
                </a>
              </div>

              <div className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg border bg-background/50 text-sm">
                <span>Treasure Hunt</span>
                <a href={treasureAttendance} target="_blank" rel="noreferrer" download>
                  <Button variant="ghost" size="sm">View</Button>
                </a>
              </div>
            </div>

            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Odlist;
