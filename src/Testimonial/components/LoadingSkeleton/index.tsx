export default function LoadingSkeleton() {
  return (
    <div
      style={{
        display: "grid",
        gap: "1.5rem",
        padding: "5rem",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      }}
    >
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid #e5e7eb",
            gap: "1rem",
            background: "#ffffff",
            padding: "1.5rem",
            borderRadius: "0.5rem",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            width: "350px",
            height: "300px",
            animation: "pulse 1.5s infinite",
          }}
        >
          <div
            style={{
              height: "20px",
              background: "#f3f4f6",
              borderRadius: "4px",
            }}
          />
          <div
            style={{
              height: "16px",
              background: "#f3f4f6",
              borderRadius: "4px",
              width: "80%",
            }}
          />
          <div
            style={{
              height: "16px",
              background: "#f3f4f6",
              borderRadius: "4px",
              width: "60%",
            }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "auto",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                background: "#f3f4f6",
                borderRadius: "50%",
              }}
            />
            <div>
              <div
                style={{
                  height: "16px",
                  background: "#f3f4f6",
                  borderRadius: "4px",
                  width: "120px",
                }}
              />
              <div
                style={{
                  height: "14px",
                  background: "#f3f4f6",
                  borderRadius: "4px",
                  width: "80px",
                  marginTop: "0.25rem",
                }}
              />
            </div>
          </div>
        </div>
      ))}

      <style>
        {`
              @keyframes pulse {
                0% { background-color: #f3f4f6; }
                50% { background-color: #e5e7eb; }
                100% { background-color: #f3f4f6; }
              }
            `}
      </style>
    </div>
  );
}
