var activePicture = null;

function showText(pictureNumber) {
  var textContainer = document.getElementById("text" + pictureNumber);
  var text = "";

  if (activePicture !== null && activePicture !== pictureNumber) {
    // Hide the text of the previously active picture
    var activeTextContainer = document.getElementById("text" + activePicture);
    activeTextContainer.style.display = "none";
  }

  // Check if the text is currently visible
  var isVisible = textContainer.style.display !== "none";

  if (isVisible) {
    // Hide the text
    textContainer.style.display = "none";
    activePicture = null; // No active picture
  } else {
    switch (pictureNumber) {
      case 1:
        text = "   The M16 is a renowned military rifle that has been in service since the 1960s. It originated in the United States and has been widely used by the U.S. military and armed forces globally. The rifle is characterized by its lightweight design, gas-operated rotating bolt system, and selective fire capability, allowing for both semi-automatic and fully automatic fire modes. It is chambered for the 5.56x45mm NATO cartridge and typically utilizes 30-round detachable box magazines. Over the years, the M16 has undergone several updates, resulting in variants such as the M16A1, M16A2, M16A3, and M16A4, which feature improvements in ergonomics, sights, and accessories. Notable features include the carry handle with integrated sights, adjustable stock, and the ability to attach accessories via Picatinny rails. The M16 is renowned for its accuracy and effective range, thanks to the 5.56x45mm NATO round's high velocity and flat trajectory. Its influence on firearm design is significant, and it has served as the basis for the development of other rifles worldwide. The M16's lightweight construction and versatility have made it a popular choice for infantry and special forces units.           ";
        break;
      case 2:
        text = "The Barrett M82, also known as the M107, is a highly regarded semi-automatic sniper rifle that has made a significant impact in the field of long-range precision shooting. Designed by Ronnie Barrett and introduced in the early 1980s, the M82 boasts a distinctive bullpup-style design and formidable capabilities. Chambered for the .50 BMG (Browning Machine Gun) cartridge, this rifle offers exceptional long-range accuracy and penetration. Its construction features a combination of steel and aluminum alloys, ensuring durability and strength, while the inclusion of a muzzle brake and detachable bipod enhances stability and recoil management. With an effective range exceeding 1,800 meters (2,000 yards), the Barrett M82 is highly regarded for its long-range performance. Military and law enforcement agencies around the world rely on its anti-materiel capabilities, making it a valuable asset for engaging vehicles, fortified positions, and structures. In regions where a civilian version is available, enthusiasts can appreciate the M82's power and precision for long-range shooting and even participation in sports shooting competitions. The continuous development of the Barrett M82, resulting in variants like the M82A1, M82A2, and M82A3, showcases the commitment to improving the rifle based on user feedback and evolving requirements. Overall, the Barrett M82 stands as a symbol of excellence in the world of sniper rifles, revered for its performance, versatility, and continuous innovation.";
        break;
        case 3:
          text = "The AK-47, also known as the Avtomat Kalashnikova model 1947, is an iconic assault rifle that has achieved global recognition. Designed by Mikhail Kalashnikov in the late 1940s, it quickly became the standard-issue firearm for many countries during the Cold War. Firing the 7.62x39mm intermediate cartridge, the AK-47 offers moderate recoil and effective performance at short to medium ranges. Its rugged and simple design, coupled with a selective fire system and gas-operated, rotating bolt mechanism, ensures reliability and ease of maintenance, even in adverse conditions. With a long-stroke gas piston system, the AK-47 demonstrates resilience against fouling and debris. Typically equipped with a 30-round curved detachable box magazine, the rifle has a cyclic rate of fire of around 600 rounds per minute in full-automatic mode. The AK-47's reliability, simplicity, and effectiveness have contributed to its global popularity. It has been extensively utilized by military forces, insurgent groups, and militias in conflicts around the world. Over time, the AK-47 has spawned numerous variants and modifications, catering to different purposes and preferences. Its impact on firearms design and modern warfare is undeniable, and it has become an iconic symbol associated with armed conflict, revolution, and insurgency in popular culture. It is essential to acknowledge that civilian ownership and use of AK-47 rifles may be subject to legal regulations and restrictions in different countries.";
          break;
        case 4:
          text = " The FN SCAR (Special Operations Forces Combat Assault Rifle) is a modern military rifle manufactured by FN Herstal, a Belgian company. Originally designed to meet the requirements of the United States Special Operations Command, the FN SCAR was developed as a versatile and modular rifle platform. It was created in the early 2000s to replace the aging M4 carbine and M16 rifle used by U.S. Special Forces. The FN SCAR is available in two main calibers, namely 5.56x45mm NATO and 7.62x51mm NATO, known as the SCAR-L (Light) and SCAR-H (Heavy), respectively. Its construction features a gas-operated, short-stroke piston system for improved reliability and reduced fouling, along with a free-floating, cold hammer-forged barrel for enhanced accuracy and durability. The rifle's modular design allows for customization and adaptation to various mission requirements. It incorporates a monolithic upper receiver with a full-length Picatinny rail, foldable and adjustable stock, and ambidextrous controls. The FN SCAR utilizes a short-stroke piston system with a rotating bolt, ensuring reliable functioning even in adverse conditions. The rifle typically uses detachable box magazines with capacities of 30 rounds for the 5.56x45mm version and 20 rounds for the 7.62x51mm version. Known for its accuracy, reliability, and ergonomic design, the FN SCAR offers controllability in both semi-automatic and fully automatic fire modes. It has been adopted by various military and law enforcement agencies worldwide, gaining recognition for its performance in combat. FN Herstal has also developed additional variants of the SCAR platform, including the SCAR PDW (Personal Defense Weapon) and SCAR-Mark 20 SSR (Sniper Support Rifle). While primarily intended for military and law enforcement use, civilian variants of the FN SCAR are available in some countries for lawful ownership and use. The FN SCAR's reputation as a reliable, modular, and effective firearm is reinforced by its extensive adoption by elite military units and special operations forces globally.";
          break;
        case 5:
          text = "The HK416 is a modern assault rifle manufactured by Heckler & Koch (HK), a German company. It was designed in the early 2000s as an improvement over the Colt M4 carbine, based on feedback from special operations forces. The HK416 gained recognition for its reliability, durability, and enhanced features. One of its key features is the gas piston operating system, which replaces the direct impingement system found in the M4 carbine. This gas piston system helps reduce fouling and carbon buildup, enhancing reliability and reducing the need for frequent cleaning. The HK416 is primarily chambered in 5.56x45mm NATO but is also available in other calibers such as 7.62x39mm and 6.8x43mm SPC. Its construction incorporates a high-strength polymer lower receiver and an aluminum upper receiver, with a full-length Picatinny rail for optics and accessories. The rifle's collapsible buttstock is adjustable for length of pull, and it features ambidextrous controls for ease of use. Known for exceptional accuracy and reliability, the HK416 performs consistently in various environments and conditions. It utilizes a short-stroke gas piston system with a rotating bolt, minimizing fouling and heat transfer to the receiver. The standard magazine capacity is 30 rounds, and the rifle has various variants and configurations, including carbine-length, rifle-length, and designated marksman rifle versions. The HK416 has been adopted by military and law enforcement organizations worldwide, including special forces units, due to its performance and reliability. While primarily designed for professional use, civilian variants of the HK416 are available in some countries for lawful ownership and use. The HK416's reputation for performance, reliability, and modularity is reflected in its extensive adoption by elite military units and law enforcement agencies globally.";
          break;
        case 6:
          text = "The Steyr AUG, also known as the Armee-Universal-Gewehr, is a bullpup assault rifle designed and manufactured by Steyr Mannlicher, an Austrian company. It was developed in the late 1960s and introduced in 1977 as the standard service rifle for the Austrian Army. The design, created by Horst Wesp, Karl Wagner, and Karl Möser, aimed to provide a lightweight and compact rifle with improved ergonomics. One of its notable features is the bullpup configuration, which places the action and magazine behind the trigger group. This design allows for a shorter overall length while maintaining a full-length barrel, enhancing maneuverability in tight spaces. The Steyr AUG features a modular construction with a polymer housing, offering durability while reducing weight. It incorporates an integrated optical sight and a top-mounted Picatinny rail for additional optics and accessories. The rifle is designed to be ambidextrous, with controls accessible from both sides. It is chambered in 5.56x45mm NATO and utilizes standard NATO STANAG magazines with various capacities. The AUG employs a quick-change barrel system, enabling users to adapt to different mission requirements or address barrel wear. It comes with a 1.5x optical sight as standard, featuring a range-finding reticle and allowing for quick target acquisition. The gas-operated, piston-driven system with a rotating bolt ensures reliable functioning. The Steyr AUG has undergone design iterations and is available in different configurations, including barrel lengths, selective fire options, and specialized variants. It has been widely adopted by military and law enforcement organizations globally due to its reliability, versatility, and ease of use. Civilian variants are also available in some countries, typically restricted to semi-automatic operation. The Steyr AUG's bullpup design, compactness, and modularity have made it a popular choice among military, law enforcement, and civilian users, earning its reputation as a highly regarded and iconic rifle.";
          break;
        case 7:
          text = "The Beretta ARX160 is a modern modular assault rifle designed and manufactured by Beretta, an Italian company. It was developed in the early 2000s as a replacement for outdated firearms used by the Italian Armed Forces. The ARX160 was designed to be lightweight, ergonomic, and versatile, catering to various military and law enforcement applications. It features a high-strength polymer frame, ensuring durability while reducing weight. The rifle's sleek and modern design incorporates clean lines and a streamlined profile. It boasts full ambidexterity, allowing for easy access to controls from both sides, including the charging handle, magazine release, and selector switch. The ARX160 is chambered in 5.56x45mm NATO, utilizing standard NATO STANAG magazines with a typical capacity of 30 rounds. A notable feature is the quick-change barrel system, enabling users to swiftly swap barrels of different lengths to meet specific mission requirements. The rifle offers a full-length Picatinny top rail for attaching various optics, complemented by flip-up front and rear sights as backup options. Its operating system relies on a gas-operated, piston-driven mechanism with a rotating bolt, ensuring reliable cycling of rounds. The ARX160 offers a fully ambidextrous fire selector switch, enabling the shooter to switch between semi-automatic, burst fire, and fully automatic modes. With a modular design, the rifle allows for customization and configuration, incorporating multiple accessory attachment points for grips, lasers, lights, and other accessories. Additionally, the ARX160 can be equipped with a folding stock for enhanced portability in tight spaces. Civilian variants of the Beretta ARX160 are available in some countries, usually restricted to semi-automatic operation in compliance with relevant firearm regulations. The Beretta ARX160's modular design, ambidextrous controls, and ergonomic features make it a modern and versatile platform suitable for military, law enforcement, and civilian applications, offering lightweight construction, reliability, and accuracy.";
          break;
        case 8:
          text = "The SIG SG 550, also known as the Sturmgewehr 90 (SG 550), is a renowned Swiss selective-fire assault rifle designed and manufactured by Swiss Arms AG. Developed in the late 1980s, it was intended to replace aging Swiss service rifles with a versatile, accurate, and reliable firearm suitable for a range of military operations. The rifle features a sturdy construction, including a lightweight aluminum alloy receiver, synthetic furniture, and a folding stock for compactness. Its gas-operated piston system with a rotating bolt ensures reliable cycling and reduces felt recoil. Following a traditional layout, the SG 550 incorporates a pistol grip, handguard, and detachable box magazine. Chambered in 5.56x45mm NATO, it utilizes standard NATO STANAG magazines with varying capacities. Equipped with a 20.7-inch (526mm) cold hammer-forged barrel, the SG 550 includes a built-in folding bipod to enhance stability during sustained fire. The rifle offers adjustable iron sights, consisting of a front post and a rear aperture sight, with settings for different distances. It features an integrated 1.5x optical sight known as the (Swiss Army Sight) (SAS) and a Picatinny rail atop the receiver for attaching optics such as red dot sights or scopes. The SG 550 can accommodate additional accessories like foregrips, tactical lights, and laser aiming modules. Its three-position fire selector (safe, single-shot, and fully automatic or three-round burst) is located above the pistol grip. The SG 550 is lauded for its exceptional reliability, performing admirably in adverse conditions. With outstanding accuracy and an effective range, it allows for precise fire at medium to long distances. The rifle has spawned variants and derivatives, including the SG 551 (short-barreled), SG 552 (compact), and SG 553 (carbine). These variants may feature slight modifications in barrel length, stock design, and overall dimensions to suit specific requirements. Adopted by the Swiss Armed Forces in 1990, the SIG SG 550 has become their standard-issue rifle. It has also gained global recognition, being exported to various countries and used by military and law enforcement agencies worldwide. The SIG SG 550's reputation is built upon its reliability, accuracy, and robust Swiss craftsmanship, which adheres to strict quality standards.";
          break;
        case 9:
          text = "The Remington 700 is a bolt-action rifle that has gained widespread popularity and is extensively used worldwide. Designed for solid construction and exceptional accuracy, it features a cylindrical steel receiver and a bolt that directly locks into the barrel, ensuring consistent alignment and precision. The rifle is commonly equipped with a traditional stock made of wood or synthetic materials, incorporating a comfortable pistol grip and a forend for stability. It is available in a diverse range of calibers, including renowned options such as .308 Winchester, .30-06 Springfield, and .300 Winchester Magnum. The Remington 700 is offered in various configurations to cater to different purposes, including hunting, tactical, and target shooting models. It typically boasts a free-floating barrel, reducing interference and enhancing accuracy. The actions of the Remington 700 are celebrated for their smoothness and reliability. The rifle's customizable trigger system, the X-Mark Pro trigger, enables shooters to adjust the pull weight and provides a crisp, clean break, contributing to accuracy and shooter control. Recognized for its exceptional precision, the Remington 700 is favored by precision shooters and hunters alike. Its design, combined with high-quality barrels and consistent manufacturing, allows for consistent sub-MOA (Minute of Angle) accuracy. The rifle excels in long-range shooting, enabling precise shots at extended distances. With extensive aftermarket support, the Remington 700 offers numerous accessories and customization options. Shooters can personalize their rifles with different stocks, barrels, triggers, scopes, and other components to suit their specific needs and preferences. The Remington 700 has also found use in military and law enforcement applications, where it is often employed as a sniper rifle. Specialized variants like the Remington 700P (Police) and the M24 Sniper Weapon System are utilized in these roles. Additionally, the rifle is highly regarded in hunting circles, renowned for its accuracy and versatility in pursuing big game animals such as deer, elk, and larger species, depending on the chosen caliber. The Remington 700's reputation as a reliable, accurate, and customizable rifle has established it as a favored choice among hunters, sport shooters, and professionals. Its robust design, wide range of calibers, and capacity for delivering precise shots at long distances have solidified its popularity and enduring success in the firearms market.";
          break;
        case 10:
          text = "The Barrett M82, also known as the Barrett .50 Caliber, is a powerful semi-automatic sniper rifle celebrated for its long-range capabilities and immense stopping power. Designed with a bullpup configuration, the rifle achieves a shorter overall length while maintaining a full-length barrel by placing the action and magazine behind the trigger. Constructed predominantly from high-strength steel and aerospace-grade aluminum alloys, the Barrett M82 ensures durability and effectively manages the recoil generated by the .50 BMG ammunition it fires. The rifle is chambered in .50 BMG, which is renowned for its exceptional long-range performance, high muzzle velocity, and ability to penetrate various barriers and armored targets. Operating on a semi-automatic action with a rotating bolt system, it delivers a round with each trigger pull while automatically cycling the next round into the chamber. The Barrett M82 is equipped with a heavy-duty muzzle brake or recoil compensator to reduce recoil and muzzle rise, enabling faster follow-up shots. Designed for long-range precision shooting, the rifle exhibits exceptional accuracy with an effective range exceeding 1,800 meters (2,000 yards) or more. Its primary role as an anti-materiel rifle involves disabling or destroying enemy equipment, vehicles, or fortified structures. With its capability to penetrate armored vehicles, concrete walls, and various types of cover, the Barrett M82 proves valuable in neutralizing threats from a distance. Additionally, the rifle can be employed for anti-personnel purposes, particularly in scenarios where long-range engagement is necessary. The Barrett M82 has found widespread adoption among military and law enforcement organizations worldwide, including the United States armed forces. Specialized units such as sniper teams, anti-materiel squads, and designated marksmen rely on its power, range, and accuracy for counter-sniper operations, long-range engagements, and urban warfare scenarios. Beyond its military and law enforcement applications, the Barrett M82 has gained popularity among civilian firearms enthusiasts and long-range shooting competitors. It serves as a formidable tool for long-range target shooting, precision shooting competitions, and is appreciated as a collectible firearm due to its iconic status and unique capabilities. Over the years, the Barrett M82 platform has seen the development of various accessories and specialized variants, catering to specific user requirements. The Barrett M82's reputation as a symbol of power and precision solidifies its position as one of the most recognized and respected sniper rifles in existence.";
          break;
        case 11:
          text = "The Accuracy International AW50 is a highly regarded and powerful bolt-action sniper rifle designed for long-range precision shooting and anti-materiel applications. It features a robust and rugged design, incorporating high-quality materials like steel and aluminum alloy for durability and accuracy. The rifle operates with a manually operated bolt-action system, allowing the shooter to cycle the bolt after each shot for reloading. Chambered in .50 BMG, the AW50 utilizes ammunition known for its exceptional long-range performance and penetration capabilities. It is renowned for its accuracy and long-range capabilities, with an effective range exceeding 1,500 meters (1,640 yards) or more. The AW50 minimizes recoil and enhances stability, enabling the shooter to maintain accuracy and make quick follow-up shots. The rifle incorporates various features and ergonomics, including a detachable box magazine for quicker reloads, adjustable cheek rest and stock for shooter preferences, and high-quality optics for precision targeting. Its primary role is as an anti-materiel rifle, engaging and neutralizing armored vehicles, equipment, and fortified structures. It also serves for anti-personnel purposes, especially in scenarios requiring long-range engagement. The AW50 finds extensive use in military and law enforcement organizations, utilized by sniper teams, anti-materiel squads, and designated marksmen. It is also popular among civilian firearms enthusiasts and long-range shooting competitors, employed for target shooting, precision competitions, and collectible purposes. The AW50 offers customization options with various accessories, including bipods, monopods, muzzle devices, triggers, and stock options. Additionally, different barrel lengths and finishes are available to suit specific user requirements. The Accuracy International AW50 stands out for its exceptional accuracy, long-range performance, and anti-materiel capabilities, making it a top choice in the sniper rifle category.";
          break;
        case 12:
          text = "The Sako TRG is a series of bolt-action sniper rifles manufactured by Sako Ltd., a Finnish company. These rifles have gained a reputation for their precision, durability, and adaptability, making them popular choices among military and law enforcement sniper teams, as well as civilian long-range shooters. The TRG features a robust and ergonomic design, with a sturdy receiver made from steel for stability. It utilizes a bolt-action system, requiring manual cycling of the bolt for each shot. The TRG is available in various calibers, including .308 Winchester, .300 Winchester Magnum, and .338 Lapua Magnum, offering different ballistic performance for different shooting distances and applications. The rifle is highly accurate and precise, manufactured with strict tolerances and high-quality components. Its adjustable stock allows for customization of length of pull, cheek rest height, and recoil pad position. This adaptability extends to different shooting scenarios, with accessory options such as sling attachment points, rails, and detachable magazines. The TRG's durability and reliability withstand harsh conditions and intensive use. Safety features, including a three-position safety switch, ensure user safety. The rifle is widely used by military and law enforcement agencies, including specialized sniper teams and counter-terrorism units. Civilian shooters also appreciate the TRG's accuracy and versatility, utilizing it in long-range precision shooting and competitive shooting disciplines. The Sako TRG series embodies the qualities sought after in a sniper rifle, making it a highly regarded choice among professionals and enthusiasts alike.";
          break;
      // Add cases for the remaining pictures
    }

    textContainer.textContent = text;
    textContainer.style.display = "block";
    activePicture = pictureNumber; // Set the active picture
  }
}