export const lightButtonStyle = (isSelected: boolean) =>
  isSelected
    ? {
        padding: "0.5rem 1rem",
        borderRadius: "10px",
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: "#005D99",
        backgroundImage: "linear-gradient(135deg, #005D99 0%, #0080BF 100%)",
        color: "#ffffff",
        cursor: "pointer",
        border: "1px solid #004080",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease, transform 0.3s ease",
      }
    : {
        padding: "0.5rem 1rem",
        borderRadius: "10px",
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: "#E0E6ED",
        backgroundImage: "linear-gradient(135deg, #E0E6ED 0%, #F5F8FA 100%)",
        color: "#333333",
        cursor: "pointer",
        border: "1px solid #B0BEC5",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease, transform 0.3s ease",
      };

export const darkButtonStyle = (isSelected: boolean) =>
  isSelected
    ? {
        padding: "0.5rem 1rem",
        borderRadius: "10px",
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: "#1A73E8",
        backgroundImage: "linear-gradient(135deg, #1A73E8 0%, #4285F4 100%)",
        color: "#ffffff",
        cursor: "pointer",
        border: "1px solid #0C47A1",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease, transform 0.3s ease",
      }
    : {
        padding: "0.5rem 1rem",
        borderRadius: "10px",
        fontSize: "1rem",
        fontWeight: "600",
        backgroundColor: "#2C2C2E",
        backgroundImage: "linear-gradient(135deg, #2C2C2E 0%, #3A3A3C 100%)",
        color: "#C7C7CC",
        cursor: "pointer",
        border: "1px solid #505050",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background-color 0.3s ease, transform 0.3s ease",
      };
