use std::process::Command;


fn main() {
    if let Ok(output) = Command::new("rustc").arg("-V").output() {
        if output.status.success() {
            if let Ok(stdout) = String::from_utf8(output.stdout) {
                if let Some(minor_version) = stdout.split(".").nth(1).and_then(|v| v.parse::<u32>().ok()) {
                    if minor_version > 33 {
                        println!("cargo:rustc-cfg=new_rustc");
                    }
                }
            }
        }
    }
}
