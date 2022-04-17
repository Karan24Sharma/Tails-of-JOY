import React, {useState, useEffect} from 'react';
import "../comment.css";

// To get data from localStorage
const getLocalItems = () => {
  let list = localStorage.getItem('list');
  
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  }
  else {
    return [];
  }
} 

export const Blogs = () => {

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState(getLocalItems());

  const addComment = () => {
    if (!comment) {
    }
    else {
      setComments([...comments, comment]);
      setComment('');
    }
  }

  // adding data to local Storage 
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(comments));
  }, [comments]);

  return (
    <>
      <div className="container my-4">
        
        <div className="comment-info">
          <h1>HOW TO WEIGHT TRAIN YOUR DOG AT HOME?</h1>
          <p>It’s a fact - the more we exercise, the better our bodies feel. The same is true for our dogs. The healthier our dogs are, the less likely an injury will occur, the less likely joint diseases will develop, the stronger their heart and muscles will be, and they are much more likely to live longer. So, in a sense, our dogs also need to work out.</p>
          <p>Obesity is a serious health issue found in dogs. The two major culprits that contribute to this issue are inactivity and overeating. Just like in humans, a lack of regular exercise increases the risk of our dogs becoming overweight. Our dogs too enjoy food as much as we do, it’s that they eat too much and people seldom keep an eye on the calorie and sugar content of their meals. Pet parents are also known to feed their dog treats to shut them up when they are causing a ruckus. Some people have a tendency to keep their dogs' food bowls loaded with full but in reality, they're overfeeding their child. As a result, dogs get obese and workout with a strict diet is the only option left for them to bring back to fitness and a healthier lifestyle.</p>
          <p>Many dog obesity problems can be reversed or prevented by making some simple changes to their diet and increasing their exercise. There are numerous different diets specifically designed for dogs for weight loss or weight maintenance. But we as pet parents must help our dogs to lose weight and stay in shape by making sure they are getting enough exercise. Daily walking your dog is a great exercise, but we can also develop indoor exercises like doggie boot camp and other dog-friendly routines for them to participate in. Talk to your vet about whether your dog is already getting enough exercise and ask for any tips or advice they can offer to help you keep your dog fit at home.</p>

          <h3>We have tried to list a few easy exercises for your dogs:</h3>
          <p><b>Puppy Push-Ups:</b> Puppy push-ups are an easy and fun way to tire out your dog while working out the major muscles in its body. You can use toys or treats to make it more interesting for your dog. Start with short, gentle exercises and work your way up to harder ones as your dog becomes stronger. We usually recommend starting with bodyweight exercises and then gradually increasing the complexity as they become comfortable with those.</p>
          <p><b>Stretching:</b> Stretching is a great way to keep your dog limber and healthy. By taking short breaks throughout the day to stretch, your dog can avoid the risks associated with tight muscles. Not only will stretching help keep your dog limber, but it’s also a great way to help reduce the risks associated with obesity. Keeping your dog moving throughout the day, reduces the amount of time it spends being inactive, which helps to keep the risks associated with inactivity at a minimum.</p>
          <p><b>Tugging:</b> Tugging is a good way to exercise and burn calories. Most dogs will burn roughly 20 calories every minute that they spend tugging. If you have a dog that is overweight, tugging can be a great way to exercise. Your dog will feel energized and will burn calories while doing it. By getting right into the game with them, you encourage them more. If sometimes you're busy, get them the Tug of Wall. It is a self-play toy that'll stimulate your dog and give them the feeling of playing tug of war while cleaning their teeth.</p>
          <p><b>Fetching:</b> Some dogs like to work out more than others. If your dog loves to play fetch, go enjoy a few throws with them. It can be an easy way to tire them out while working out the major muscles in their body. You can use toys or even a stick to make it more interesting for your dog. Start with short, gentle exercises and work your way up to harder ones as your dog becomes healthier. Grab a Rugby Bell Toy from Pawsindia to enjoy your fetching sessions.</p>

          <h1>DOES GLOBAL WARMING AFFECT YOUR PET?</h1>
          <p>Temperatures are on the rise across the globe, with the summers of 2022 beginning to be very hot and brutal. Most people are aware that the climate is getting hotter, but they might not realize how much animals are impacted by this. The last few years have been the hottest on record, and with no end in sight to the heatwave, animals are feeling the heat. In some regions, temperatures have reached record levels, and this is only the beginning and it’s only getting hotter from here.</p>
          <p>Heatwaves are a common occurrence during the summer months in many parts of the country. In recent times, global warming has led to an increase in atmospheric temperature. Ultraviolet rays easily penetrate the earth’s atmosphere and cause a significant rise in the temperature. During the past few years, many parts of the country have been experiencing longer and more intense heat waves because of global warming. The heat is often accompanied by high humidity, which can make the heat feel even worse. A heatwave is a condition where the temperatures are excessively high and humid, especially in countries with oceanic climates. A heatwave is generally defined concerning the usual weather in the area and normal seasonal temperatures</p>
          <p>Summer heatwaves can be dangerous for people, but the heat is unbearable for animals. The animals’ bodies produce less sweat to cope with the heat, which puts them at risk for dehydration, heat stroke, and even death. While we tend to think of dogs and cats as the animals most affected by the heat, rabbits and birds are also at risk. In some cases, rabbits and birds don’t even sweat to keep cool, and they rely on panting as their primary means of cooling down.</p>

        </div>

        <hr />

        <div className="app-container comment-show">
          {
            comments.map((elem, index)=>{
              return (
                <ul className="list-group" key = {index}>
                  <li className="list-item">{elem}</li>
                  </ul>
              )
            })
          }
        </div>
        <hr />

        <div className="container comment-section">
          <h1>Add Comment Here</h1>
          <form>
          <div className="form-group mb-3">
            <textarea name="comment" className="form-control"
              placeholder="#comment"
              value = {comment}
              onChange = {(e) => setComment(e.target.value)}/>
          </div>
          <div className="form-group comment-btn">
            <button type="submit" onClick={addComment} className="btn btn-primary">Add</button>
          </div>
          </form>
        </div>

      </div>
    </>
  )
}
