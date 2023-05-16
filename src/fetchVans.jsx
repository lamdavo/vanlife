import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "f07m1ylfxd13",
  environment: "master",
  accessToken: "zbIQa5S1NGtctRArMNIFL-nRx0RjUMPfUOR5aOX5RBY",
});

export const useFetchVans = () => {
  const [loading, setLoading] = useState(false);
  const [vans, setVans] = useState([]);

  const getVans = async () => {
    try {
      const response = await client.getEntries({ content_type: "vanlife" });
      const vans = response.items.map((item) => {
        const { description, title, price, tier, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, description, price, tier, id, img };
      });
      setVans(vans);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getVans();
    setLoading(false);
  }, []);

  return { loading, vans };
};
