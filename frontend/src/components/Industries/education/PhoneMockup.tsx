import { useState, useEffect } from "react";

// ─── Icon helper ──────────────────────────────────────────────────────────────
const Icon = ({ d, size = 20, color = "currentColor" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d={d} />
  </svg>
);

const IC = {
  wifi: "M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z",
  battery:
    "M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z",
  bell: "M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
  search:
    "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
  play: "M8 5v14l11-7z",
  back: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
  bookmark: "M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z",
  star: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
  clock:
    "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z",
  tag: "M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42z",
  shield: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
  book: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1z",
  home: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
  map: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
  grid: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z",
  person:
    "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
  filter: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
};

const RED = "#c0392b";

// ─── Status Bar ───────────────────────────────────────────────────────────────
function StatusBar({ light }) {
  const c = light ? "#fff" : "#111";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px 6px",
        flexShrink: 0,
      }}>
      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: c,
          fontFamily: "system-ui",
        }}>
        9:30
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <Icon d={IC.wifi} size={14} color={c} />
        <Icon d={IC.battery} size={14} color={c} />
      </div>
    </div>
  );
}

// ─── SCREEN A: Home ───────────────────────────────────────────────────────────
function HomeScreen() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#fff",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}>
      <StatusBar light={false} />

      {/* Dynamic island spacer */}
      <div style={{ height: 10 }} />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px 12px",
        }}>
        <span style={{ fontSize: 18, fontWeight: 700, color: "#111" }}>
          Welcome Hina
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#f3f4f6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Icon d={IC.filter} size={18} color="#555" />
          </div>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "#fef2f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}>
            <Icon d={IC.bell} size={18} color={RED} />
            <span
              style={{
                position: "absolute",
                top: 5,
                right: 5,
                width: 7,
                height: 7,
                background: RED,
                borderRadius: "50%",
                border: "1.5px solid #fff",
              }}
            />
          </div>
        </div>
      </div>

      {/* Search */}
      <div style={{ padding: "0 20px 12px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "#f3f4f6",
            borderRadius: 14,
            padding: "10px 14px",
          }}>
          <Icon d={IC.search} size={16} color="#9ca3af" />
          <span style={{ fontSize: 13, color: "#9ca3af" }}>Search Here</span>
        </div>
      </div>

      {/* Tags */}
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "0 20px 16px",
          overflowX: "auto",
        }}>
        {["UX/UI", "Website design", "Figma", ">>>"].map((t, i) => (
          <span
            key={t}
            style={{
              flexShrink: 0,
              fontSize: 11,
              fontWeight: 600,
              padding: "5px 12px",
              borderRadius: 20,
              background: i === 0 ? RED : "transparent",
              color: i === 0 ? "#fff" : "#666",
              border: `1px solid ${i === 0 ? RED : "#e5e7eb"}`,
            }}>
            {t}
          </span>
        ))}
      </div>

      <div style={{ flex: 1 }} />

      {/* My Courses */}
      <div style={{ padding: "0 20px 16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>
            My courses
          </span>
          <span style={{ fontSize: 12, fontWeight: 600, color: RED }}>
            See All
          </span>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {/* Card 1 */}
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
              background: "#fff",
            }}>
            <div
              style={{
                position: "relative",
                height: 90,
                background: "linear-gradient(135deg,#475569,#1e293b)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <Icon d={IC.play} size={16} color="#fff" />
              </div>
              <span
                style={{
                  position: "absolute",
                  bottom: 6,
                  left: 8,
                  fontSize: 9,
                  color: "#fff",
                  background: "rgba(0,0,0,0.55)",
                  padding: "2px 5px",
                  borderRadius: 4,
                }}>
                3:00:08
              </span>
            </div>
            <div style={{ padding: "8px 10px 10px", background: "#fff" }}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#111",
                  margin: 0,
                }}>
                Website design
              </p>
              <p
                style={{
                  fontSize: 10,
                  color: "#9ca3af",
                  margin: "3px 0 0",
                  lineHeight: 1.4,
                }}>
                Lorem ipsum dolor sit amet cons kolu
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
              background: "#fff",
            }}>
            <div
              style={{
                position: "relative",
                height: 90,
                background: "linear-gradient(135deg,#93c5fd,#3b82f6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#1e3a8a",
                  textAlign: "center",
                  padding: "0 6px",
                  lineHeight: 1.3,
                  zIndex: 1,
                }}>
                Get Free UI/UX Courses
              </p>
              <span
                style={{
                  position: "absolute",
                  bottom: 6,
                  left: 8,
                  fontSize: 9,
                  color: "#fff",
                  background: "rgba(0,0,0,0.55)",
                  padding: "2px 5px",
                  borderRadius: 4,
                }}>
                6:40:08
              </span>
            </div>
            <div style={{ padding: "8px 10px 10px", background: "#fff" }}>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#111",
                  margin: 0,
                }}>
                UI/UX
              </p>
              <p
                style={{
                  fontSize: 10,
                  color: "#9ca3af",
                  margin: "3px 0 0",
                  lineHeight: 1.4,
                }}>
                Lorem ipsum dolor sit amet cons kolu
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* My Favourite */}
      <div style={{ padding: "0 20px 8px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#111" }}>
            My favourite
          </span>
          <span style={{ fontSize: 12, fontWeight: 600, color: RED }}>
            See All
          </span>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
            }}>
            <div
              style={{
                position: "relative",
                height: 70,
                background: "linear-gradient(135deg,#f87171,#dc2626)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#fff",
                  textAlign: "center",
                  padding: "0 6px",
                  lineHeight: 1.3,
                }}>
                Grow Your Purpose
              </p>
              <span
                style={{
                  position: "absolute",
                  bottom: 6,
                  left: 8,
                  fontSize: 9,
                  color: "#fff",
                  background: "rgba(0,0,0,0.55)",
                  padding: "2px 5px",
                  borderRadius: 4,
                }}>
                6:30:20
              </span>
            </div>
            <div style={{ height: 6, background: "#fff" }} />
          </div>
          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
            }}>
            <div
              style={{
                position: "relative",
                height: 70,
                background: "linear-gradient(135deg,#818cf8,#4338ca)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#fff",
                  textAlign: "center",
                  padding: "0 6px",
                  lineHeight: 1.3,
                }}>
                Digital Market
              </p>
              <span
                style={{
                  position: "absolute",
                  bottom: 6,
                  left: 8,
                  fontSize: 9,
                  color: "#fff",
                  background: "rgba(0,0,0,0.55)",
                  padding: "2px 5px",
                  borderRadius: 4,
                }}>
                6:00:08
              </span>
            </div>
            <div style={{ height: 6, background: "#fff" }} />
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "10px 20px 16px",
          borderTop: "1px solid #f3f4f6",
          background: "#fff",
          flexShrink: 0,
        }}>
        {[
          { icon: IC.home, active: true },
          { icon: IC.map, active: false },
          { icon: IC.grid, active: false },
          { icon: IC.person, active: false },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
            }}>
            <Icon
              d={item.icon}
              size={22}
              color={item.active ? RED : "#9ca3af"}
            />
            {item.active && (
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: RED,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── SCREEN B: Course Detail ──────────────────────────────────────────────────
function DetailScreen() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        background: "#f5f0eb",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}>
      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "34%",
          background: "linear-gradient(135deg,#334155,#1e293b,#0f172a)",
          flexShrink: 0,
        }}>
        {/* glow blobs */}
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 30,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#4285F4",
            opacity: 0.2,
            filter: "blur(20px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            width: 50,
            height: 50,
            borderRadius: "50%",
            background: "#629DFF",
            opacity: 0.15,
            filter: "blur(16px)",
          }}
        />
        {/* status bar */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <StatusBar light={true} />
        </div>
        {/* book icon */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div
            style={{
              width: 60,
              height: 48,
              borderRadius: 10,
              background: "rgba(66,133,244,0.15)",
              border: "1px solid rgba(66,133,244,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Icon d={IC.book} size={30} color="rgba(147,197,253,0.7)" />
          </div>
        </div>
        {/* Play button */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}>
          <div
            style={{
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
            }}>
            <Icon d={IC.play} size={22} color="#1e293b" />
          </div>
        </div>
        {/* Back */}
        <div style={{ position: "absolute", bottom: 14, left: 14, zIndex: 10 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Icon d={IC.back} size={16} color="#fff" />
          </div>
        </div>
        {/* Bookmark */}
        <div
          style={{ position: "absolute", bottom: 14, right: 14, zIndex: 10 }}>
          <div
            style={{
              width: 30,
              height: 30,
              borderRadius: "50%",
              background: "rgba(0,0,0,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Icon d={IC.bookmark} size={16} color="#fff" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", background: "#fff", flexShrink: 0 }}>
        {["overview", "Lessons", "Reviews"].map((tab) => (
          <div
            key={tab}
            style={{
              flex: 1,
              padding: "12px 0",
              textAlign: "center",
              fontSize: 12,
              fontWeight: 600,
              background: tab === "overview" ? RED : "#fff",
              color: tab === "overview" ? "#fff" : "#6b7280",
              textTransform: "capitalize",
            }}>
            {tab}
          </div>
        ))}
      </div>

      {/* Body */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "14px 18px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
        {/* Title + price */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 8,
          }}>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "#111",
                margin: 0,
              }}>
              Website Design
            </p>
            <p style={{ fontSize: 11, color: "#9ca3af", margin: "4px 0 6px" }}>
              By tom Makeaman
            </p>
            <div style={{ display: "flex", gap: 2 }}>
              {[1, 2, 3, 4].map((s) => (
                <Icon key={s} d={IC.star} size={14} color="#f59e0b" />
              ))}
              <Icon d={IC.star} size={14} color="#d1d5db" />
            </div>
          </div>
          <div style={{ textAlign: "right", flexShrink: 0 }}>
            <p
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: "#111",
                margin: 0,
              }}>
              95$
            </p>
            <p style={{ fontSize: 9, color: "#9ca3af", margin: "2px 0 0" }}>
              Lorem ipsum Text
            </p>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 11,
            color: "#6b7280",
            lineHeight: 1.7,
            margin: 0,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac augue leo. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia curae; Donec metus lacus, aliquam{" "}
          <span style={{ color: RED, fontWeight: 600 }}>Read more</span>
        </p>

        {/* Info rows */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { icon: IC.book, label: "100+ lessons" },
            { icon: IC.clock, label: "7 weeks" },
            { icon: IC.tag, label: "30% Off" },
            { icon: IC.shield, label: "certificate" },
          ].map((item, i) => (
            <div
              key={i}
              style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: 6,
                  background: RED,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                <Icon d={item.icon} size={15} color="#fff" />
              </div>
              <span style={{ fontSize: 12, color: "#374151", fontWeight: 500 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <p
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: "#111",
              margin: "0 0 8px",
            }}>
            Skills
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {["UX/UI", "Website design", "Figma", "Adobe XD", "Animations"].map(
              (s) => (
                <span
                  key={s}
                  style={{
                    fontSize: 11,
                    color: "#4b5563",
                    background: "#fff",
                    border: "1px solid #e5e7eb",
                    padding: "5px 12px",
                    borderRadius: 20,
                    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  }}>
                  {s}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Phone Shell ──────────────────────────────────────────────────────────────
// Strategy: render content at exactly 390×780 (natural phone size),
// then CSS scale it down to fit. This ensures text/icons always look correct.
const PHONE_W = 390;
const PHONE_H = 780;

export default function PhoneMockup() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [incoming, setIncoming] = useState(null);

  const switchTo = (next) => {
    if (next === active || animating) return;
    setAnimating(true);
    setIncoming(next);
    setTimeout(() => {
      setActive(next);
      setIncoming(null);
      setAnimating(false);
    }, 420);
  };

  useEffect(() => {
    const t = setInterval(() => switchTo(active === 0 ? 1 : 0), 3500);
    return () => clearInterval(t);
  }, [active, animating]);

  const screens = [<HomeScreen key="home" />, <DetailScreen key="detail" />];

  // Scale so the 390px-wide content fits inside the visual phone width we want
  // Target visual width ≈ 290px on desktop, phone height auto-derived
  const TARGET_W = 260; // visual px width of phone on screen
  const SCALE = TARGET_W / PHONE_W;
  const VISUAL_H = PHONE_H * SCALE;

  // Frame padding around screen
  const PAD = 10;

  return (
    <div style={{}}>
      <style>{`
        @keyframes slideFromRight { from{transform:translateX(100%)}  to{transform:translateX(0)} }
        @keyframes slideFromLeft  { from{transform:translateX(-100%)} to{transform:translateX(0)} }
        @keyframes slideToLeft    { from{transform:translateX(0)} to{transform:translateX(-100%)} }
        @keyframes slideToRight   { from{transform:translateX(0)} to{transform:translateX(100%)}  }
        .s-in-r  { animation: slideFromRight 0.42s cubic-bezier(0.22,1,0.36,1) both }
        .s-in-l  { animation: slideFromLeft  0.42s cubic-bezier(0.22,1,0.36,1) both }
        .s-out-l { animation: slideToLeft    0.42s cubic-bezier(0.22,1,0.36,1) both }
        .s-out-r { animation: slideToRight   0.42s cubic-bezier(0.22,1,0.36,1) both }
        ::-webkit-scrollbar { display:none }
        * { scrollbar-width:none }
      `}</style>

      {/* Phone outer wrapper — visual size */}
      <div
        style={{
          position: "relative",
          width: TARGET_W + PAD * 2,
          height: VISUAL_H + PAD * 2,
          borderRadius: 44,
          background:
            "linear-gradient(145deg,#3c3c3c 0%,#1e1e1e 60%,#2e2e2e 100%)",
          boxShadow: [
            "0 0 0 1px #4a4a4a",
            "0 0 0 2.5px #111",
            "0 28px 72px rgba(0,0,0,0.92)",
            "0 8px 20px rgba(0,0,0,0.6)",
            "inset 0 1px 0 rgba(255,255,255,0.09)",
          ].join(","),
          flexShrink: 0,
        }}>
        {/* Side buttons */}
        {[
          { side: "left", top: "20%", h: 22 },
          { side: "left", top: "29%", h: 22 },
          { side: "right", top: "25%", h: 38 },
        ].map((b, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              zIndex: 20,
              [b.side]: -3,
              top: b.top,
              width: 3,
              height: b.h,
              background: "linear-gradient(180deg,#2e2e2e,#1a1a1a)",
              borderRadius: b.side === "left" ? "2px 0 0 2px" : "0 2px 2px 0",
            }}
          />
        ))}

        {/* Screen cutout */}
        <div
          style={{
            position: "absolute",
            inset: PAD,
            borderRadius: 34,
            overflow: "hidden",
            background: "#000",
          }}>
          {/* Dynamic Island */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 50,
              width: 80 * SCALE,
              height: 22 * SCALE,
              background: "#000",
              borderRadius: 20,
              boxShadow: "0 0 0 1px #222",
            }}
          />

          {/* Content scaler: renders at 390px, scales down */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: PHONE_W,
              height: PHONE_H,
              transformOrigin: "top left",
              transform: `scale(${SCALE})`,
              overflow: "hidden",
            }}>
            {/* Screens */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}>
              {/* Current */}
              <div
                className={
                  animating ? (incoming > active ? "s-out-l" : "s-out-r") : ""
                }
                style={{ position: "absolute", inset: 0 }}>
                {screens[active]}
              </div>

              {/* Incoming */}
              {animating && incoming !== null && (
                <div
                  className={incoming > active ? "s-in-r" : "s-in-l"}
                  style={{ position: "absolute", inset: 0 }}>
                  {screens[incoming]}
                </div>
              )}
            </div>
          </div>

          {/* Glass shine */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: 34,
              pointerEvents: "none",
              zIndex: 40,
              background:
                "linear-gradient(135deg,rgba(255,255,255,0.06) 0%,transparent 40%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
