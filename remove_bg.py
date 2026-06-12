from PIL import Image

def remove_white_bg(image_path, output_path, tolerance=240):
    try:
        img = Image.open(image_path).convert("RGBA")
        data = img.getdata()
        
        new_data = []
        for item in data:
            if item[0] >= tolerance and item[1] >= tolerance and item[2] >= tolerance:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append(item)
                
        img.putdata(new_data)
        img.save(output_path, "PNG")
        print("Background removed successfully.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    remove_white_bg(r"c:\Users\unkown\Documents\GitHub\salon\images\makeup-black-dress.png", r"c:\Users\unkown\Documents\GitHub\salon\images\makeup-black-dress.png")
