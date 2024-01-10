
export const getUserData = async () => {
    try {
      const response = await fetch("http://localhost:3001/users");
      const data = await response.json();
      return data.length > 0 ? data[0] : null;
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

export const getUserInterests = async () => {
    try {
      const response = await fetch("http://localhost:3001/users/interests");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user interests:", error);
      return null;
    }
  };

export const getUserSkills = async () => {
    try {
      const response = await fetch("http://localhost:3001/users/aptitudes");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching user skills:", error);
      return null;
    }
  };
  