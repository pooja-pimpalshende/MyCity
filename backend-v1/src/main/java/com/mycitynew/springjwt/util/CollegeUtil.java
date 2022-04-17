package com.mycitynew.springjwt.util;

import java.nio.file.Path;
import java.nio.file.Paths;

public final class CollegeUtil {

  private CollegeUtil() {
    // restrict instantiation
  }

  public static final String folderPath =  "college-files//";
  public static final Path filePath = Paths.get(folderPath);

}

