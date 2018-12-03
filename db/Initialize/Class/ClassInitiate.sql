create table Classes(Class_id serial primary key,
 Class_Name varchar(80),
  Alignment varchar(80),
   Hitdie varchar(40),
    class_Skills text,
     SkillPtIni varchar(80),
     SkillPt varchar(80),
      Weapon_Proficiency varchar(80),
       Armor_Proficiency varchar(80),
 Shield_Proficiency varchar(80))

 insert into classes(class_name, alignment, hitdie, class_skills, skillptini, skillpt, weapon_proficiency, armor_proficiency, shield_proficiency, class_description)
values('Bard', 'Any Nonlawful', 'D6', 'Appraise, Balance, Bluff, Climb, Concentration, Craft, Decipher Script, Diplomancy, disguise, Escape Artist, Gather Information, Hide, Jump, Knowledge, Listen, Move Silently, Perform, Profession, Sleight of Hand, Speak Language, Spellcraft, Swim, Tumble, Use Magic Device',
'(6+int modifier)x4', '6+int modifier', 'Simple weapons, Longsword, RApier, Sap, Short Sword, Shortbow, Whip', 'Light armor', 'light shields','A master of performance whose songs and music inspire those around them to perform significantly better')