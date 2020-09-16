const categories = [
    {
      id: "plants",
      name: "Plants",
      tags: ["products", "inspirations"],
      count: 147,
      image: require("../assets/icons/plants.png")
    },
    {
      id: "seeds",
      name: "Seeds",
      tags: ["products", "shop"],
      count: 16,
      image: require("../assets/icons/seeds.png")
    },
    {
      id: "flowers",
      name: "Flowers",
      tags: ["products", "inspirations"],
      count: 68,
      image: require("../assets/icons/flowers.png")
    },
    {
      id: "sprayers",
      name: "Sprayers",
      tags: ["products", "shop"],
      count: 17,
      image: require("../assets/icons/sprayers.png")
    },
    {
      id: "pots",
      name: "Pots",
      tags: ["products", "shop"],
      count: 47,
      image: require("../assets/icons/pots.png")
    },
    {
      id: "fertilizers",
      name: "fertilizers",
      tags: ["products", "shop"],
      count: 47,
      image: require("../assets/icons/fertilizers.png")
    }
  ];
  
  const products = [
    {
      id: 1,
      name: "16 Best Plants That Thrive In Your Bedroom",
      description:
        "Bedrooms deserve to be decorated with lush greenery just like every other room in the house – but it can be tricky to find a plant that thrives here. Low light, high humidity and warm temperatures mean only certain houseplants will flourish.",
      tags: ["Interior", "27 m²", "Ideas"],
      images: [
        "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988__340.jpg",
        "https://cdn.pixabay.com/photo/2019/07/14/08/08/night-4336403__340.jpg",
        "https://cdn.pixabay.com/photo/2020/08/31/09/33/beach-5531919__340.jpg",
        "https://cdn.pixabay.com/photo/2020/08/29/08/33/woman-5526487__340.jpg",
        "https://cdn.pixabay.com/photo/2020/09/01/06/00/sky-5534319__340.jpg",
        "https://cdn.pixabay.com/photo/2020/04/09/14/42/girls-5021801_960_720.jpg",
        "https://cdn.pixabay.com/photo/2019/06/22/18/26/woman-4292185_960_720.jpg",
        "https://cdn.pixabay.com/photo/2019/06/22/18/26/woman-4292185_960_720.jpg",
        "https://cdn.pixabay.com/photo/2020/04/26/14/09/girl-5095383_960_720.jpg"
      ]
    }
  ];
  
  const explore = [
    // images
    require("../assets/images/explore_1.png"),
    require("../assets/images/explore_2.png"),
    require("../assets/images/explore_3.png"),
    require("../assets/images/explore_4.png"),
    require("../assets/images/explore_5.png"),
    require("../assets/images/explore_6.png")
  ];
  
  const profile = {
    username: "react-ui-kit",
    location: "Europe",
    email: "contact@react-ui-kit.com",
    avatar: require("../assets/images/avatar.png"),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false
  };

  // const images = {
  //   image1: "https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988__340.jpg",
  //   image2: "https://cdn.pixabay.com/photo/2019/07/14/08/08/night-4336403__340.jpg",
  //   image3: "https://cdn.pixabay.com/photo/2020/08/31/09/33/beach-5531919__340.jpg",
  //   image4: "https://cdn.pixabay.com/photo/2020/08/29/08/33/woman-5526487__340.jpg",
  //   image5: "https://cdn.pixabay.com/photo/2020/09/01/06/00/sky-5534319__340.jpg",
  //   image6: "https://cdn.pixabay.com/photo/2020/04/09/14/42/girls-5021801_960_720.jpg",
  //   image7: "https://cdn.pixabay.com/photo/2019/06/22/18/26/woman-4292185_960_720.jpg",
  //   image8: "https://cdn.pixabay.com/photo/2019/06/22/18/26/woman-4292185_960_720.jpg",
  //   image9: "https://cdn.pixabay.com/photo/2020/04/26/14/09/girl-5095383_960_720.jpg"
  // }

  const images = {
    image1: require("../assets/images/image1.jpg"),
    image2: require("../assets/images/image2.jpg"),
    image3: require("../assets/images/image3.jpg"),
    image4: require("../assets/images/image4.jpg"),
    image5: require("../assets/images/image5.jpg"),
    image6: require("../assets/images/image6.jpg"),
  }

  const icons = {
    image_video: require("../assets/icons/image_video.png"),
    tag: require("../assets/icons/tag.png"),
    checkin: require("../assets/icons/check_in.png"),
    gif: require("../assets/icons/gif.png"),
    question: require("../assets/icons/question.png"),
    camera: require("../assets/icons/camera.png")
  }
  
  export { categories, explore, products, profile, images, icons };