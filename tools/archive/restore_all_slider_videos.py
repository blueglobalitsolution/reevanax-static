import json, re, copy, shutil
from pathlib import Path

# 1. Ensure all mobile poster images exist
media_dir = Path('assets/uploads/revslider/video-media')
media_dir.mkdir(parents=True, exist_ok=True)
source_img = Path('assets/uploads/2025/08/ezgif-frame-001.jpg')

mobile_posters = [
    'hair-treatment-Mobile_34.jpeg',
    'carbon-facia-Mobile_36.jpeg',
    'Skin-Care-Mobile_35.jpeg',
    'Gynec-Aesthetics-Mobile_37.jpeg',
    'Mommy-Makeover-Mobile-_38.jpeg',
    'FACE-PROCEDURES-MOBILE_39.jpeg',
    'Tattoo-Removal-Mobile_40.jpeg',
    'Anti-Aging-Mobile_41.jpeg',
    'Body-Fitness-Treatment-Mobile_42.jpeg',
    'Plastic-Surgery-Mobile_43.jpeg'
]

for p in mobile_posters:
    tgt = media_dir / p
    if not tgt.exists():
        if source_img.exists():
            shutil.copyfile(source_img, tgt)
        else:
            tgt.write_bytes(b'')

# 2. Slide configurations for all 10 topics
topic_configs = [
    {
        "d_id": "29", "m_id": "45",
        "title": "Hair Care Treatment",
        "subtitle": "Transform Your Hair,\nTransform Your Confidence!",
        "link": "/hair-care-procedures/",
        "video": "/assets/uploads/2025/05/hair-treatment-2.mp4",
        "d_poster": "/assets/uploads/revslider/video-media/hair-treatment-2_21.jpeg",
        "m_poster": "/assets/uploads/revslider/video-media/hair-treatment-Mobile_34.jpeg"
    },
    {
        "d_id": "35", "m_id": "47",
        "title": "Carbon Laser Facial",
        "subtitle": "Reveal Clear, Glowing\n& Radiant Skin!",
        "link": "/face-procedures/",
        "video": "/assets/uploads/gif/co2-and-PICO-laser.mp4",
        "d_poster": "/assets/uploads/revslider/video-media/carbon-facia_25.jpeg",
        "m_poster": "/assets/uploads/revslider/video-media/carbon-facia-Mobile_36.jpeg"
    },
    {
        "d_id": "34", "m_id": "46",
        "title": "Skin Care Procedures",
        "subtitle": "Customized Dermatology\n& Skin Rejuvenation",
        "link": "/face-procedures/",
        "video": "/assets/uploads/2025/06/laser-treatment-FOR-skin-tighetening.mp4",
        "d_poster": "/assets/uploads/revslider/video-media/skin-care_24.jpeg",
        "m_poster": "/assets/uploads/revslider/video-media/Skin-Care-Mobile_35.jpeg"
    },
    {
        "d_id": "36", "m_id": "48",
        "title": "Cosmetic Gynecology",
        "subtitle": "Empowering Intimate Wellness\n& Confidence",
        "link": "/cosmetic-gynecology-treatment/",
        "video": "/assets/uploads/2025/05/Gynec-Aesthetics-2.mp4",
        "d_poster": "/assets/uploads/revslider/video-media/Gynec-Aesthetics-2_26.jpeg",
        "m_poster": "/assets/uploads/revslider/video-media/Gynec-Aesthetics-Mobile_37.jpeg"
    },
    {
        "d_id": "37", "m_id": "49",
        "title": "Mommy Makeover",
        "subtitle": "Restore Your Pre-Pregnancy\nBody & Elegance",
        "link": "/mommy-makeover/",
        "video": "/assets/uploads/2025/05/Mommy-Makeover-4.mp4",
        "d_poster": "/assets/uploads/revslider/video-media/Mommy-Makeover-1_27.jpeg",
        "m_poster": "/assets/uploads/revslider/video-media/Mommy-Makeover-Mobile-_38.jpeg"
    },
    {
        "d_id": "38", "m_id": "50",
        "title": "Advanced Face Procedures",
        "subtitle": "Natural Facial Harmony\n& Youthful Contours",
        "link": "/face-procedures/",
        "video": "/assets/uploads/2025/04/Face-Procedures.mp4",
        "d_poster": "/assets/uploads/revslider/video-media/FACE-PROCEDURES-2_28.jpeg",
        "m_poster": "/assets/uploads/revslider/video-media/FACE-PROCEDURES-MOBILE_39.jpeg"
    },
    {
        "d_id": "39", "m_id": "51",
        "title": "Scar & Tattoo Removal",
        "subtitle": "Advanced Pico & CO2\nLaser Technology",
        "link": "/scar-tattoo-removal/",
        "video": "/assets/uploads/2025/04/Scar-tattoo-Removal.mp4",
        "d_poster": "/assets/uploads/revslider/video-media/Tattoo-Removal-1_29.jpeg",
        "m_poster": "/assets/uploads/revslider/video-media/Tattoo-Removal-Mobile_40.jpeg"
    },
    {
        "d_id": "40", "m_id": "52",
        "title": "Anti-Aging Treatments",
        "subtitle": "Turn Back Time With\nAdvanced Age-Defying Care",
        "link": "/anti-agening-treatment/",
        "video": "/assets/uploads/2025/04/Anti-Agening.mp4",
        "d_poster": "/assets/uploads/revslider/video-media/Anti-Aging-1_30.jpeg",
        "m_poster": "/assets/uploads/revslider/video-media/Anti-Aging-Mobile_41.jpeg"
    },
    {
        "d_id": "41", "m_id": "53",
        "title": "Body Fitness Treatment",
        "subtitle": "Sculpt, Tone & Redefine\nYour Ideal Physique",
        "link": "/body-fitness-treatment/",
        "video": "/assets/uploads/2025/05/Fitness-Treatment-2.mp4",
        "d_poster": "/assets/uploads/revslider/video-media/Body-FItness-Treatment-1_31.jpeg",
        "m_poster": "/assets/uploads/revslider/video-media/Body-Fitness-Treatment-Mobile_42.jpeg"
    },
    {
        "d_id": "42", "m_id": "54",
        "title": "Plastic & Cosmetic Surgery",
        "subtitle": "Board-Certified Precision\n& Aesthetic Excellence",
        "link": "/plastic-surgery/",
        "video": "/assets/uploads/2025/04/PLASTIC-SURGERY.mp4",
        "d_poster": "/assets/uploads/revslider/video-media/Plastic-Surgery-1_32.jpeg",
        "m_poster": "/assets/uploads/revslider/video-media/Plastic-Surgery-Mobile_43.jpeg"
    }
]

html_path = Path('index.html')
content = html_path.read_text(encoding='utf-8')

# Helper function to build layers for a slide
def build_slide_layers(base_layers, cfg, is_mobile=False):
    new_layers = copy.deepcopy(base_layers)
    poster = cfg["m_poster"] if is_mobile else cfg["d_poster"]
    
    # Layer 0: Title Text
    if "0" in new_layers:
        new_layers["0"]["content"] = {"text": cfg["title"]}
    
    # Layer 3: Subtitle Text
    if "3" in new_layers:
        new_layers["3"]["content"] = {"text": cfg["subtitle"]}
        
    # Layer 6: Read More Button
    if "6" in new_layers:
        new_layers["6"]["href"] = cfg["link"]
        
    # Layer 7: Slide BG Video
    if "7" in new_layers:
        video_obj = new_layers["7"].get("bg", {}).get("video", {})
        video_obj["src"] = cfg["video"]
        if "poster" in video_obj:
            video_obj["poster"]["src"] = poster
            
    return new_layers

# Process Desktop Slider (SR7_9_1)
match_d = re.search(r"SR7\.JSON\['SR7_9_1'\]\s*=\s*(\{.*?\});\n", content)
if match_d:
    d_data = json.loads(match_d.group(1))
    base_layers_d = d_data['slides']['29']['layers']
    
    for cfg in topic_configs:
        sid = cfg["d_id"]
        if sid in d_data['slides']:
            d_data['slides'][sid]['layers'] = build_slide_layers(base_layers_d, cfg, is_mobile=False)
            d_data['slides'][sid]['slide']['actions'] = [{
                "a": "link", "evt": "mouseenter", "http": "keep",
                "target": "_self", "flw": "follow", "ltype": "a",
                "link": cfg["link"], "src": [6]
            }]
    
    new_d_json = json.dumps(d_data, separators=(',', ':'))
    content = content[:match_d.start()] + f"SR7.JSON['SR7_9_1'] = {new_d_json};\n" + content[match_d.end():]
    print("Updated Desktop Slider SR7_9_1 with all 10 video slides!")

# Process Mobile Slider (SR7_12_2)
match_m = re.search(r"SR7\.JSON\['SR7_12_2'\]\s*=\s*(\{.*?\});\n", content)
if match_m:
    m_data = json.loads(match_m.group(1))
    base_layers_m = m_data['slides']['45']['layers']
    
    for cfg in topic_configs:
        sid = cfg["m_id"]
        if sid in m_data['slides']:
            m_data['slides'][sid]['layers'] = build_slide_layers(base_layers_m, cfg, is_mobile=True)
            m_data['slides'][sid]['slide']['actions'] = [{
                "a": "link", "evt": "mouseenter", "http": "keep",
                "target": "_self", "flw": "follow", "ltype": "a",
                "link": cfg["link"], "src": [6]
            }]
            
    new_m_json = json.dumps(m_data, separators=(',', ':'))
    content = content[:match_m.start()] + f"SR7.JSON['SR7_12_2'] = {new_m_json};\n" + content[match_m.end():]
    print("Updated Mobile Slider SR7_12_2 with all 10 video slides!")

html_path.write_text(content, encoding='utf-8')
print("index.html saved successfully!")
